const booking = require('../Model/booking');

module.exports.saveChanges = (req,res,next)=>
{
console.log(req.body);

  if (req.userData.userId)
  {

    booking.deleteMany({})
    .then(resu=>{


      req.body.forEach(item => {
        if(!item.creator)
        {
          console.log("--->",item.creator);
          const Newbooking = new booking({
            creator: req.userData.userId,
            Subject : item.Subject,
            StartTime: item.StartTime,
            EndTime: item.EndTime,
            Status: item.Status,
            Id:item.Id,
            salle:"dffd"
          });
          Newbooking.save();
        }

        else
          new booking(item).save();
      })
          res.json("ok");




    }
    );

  }
}



const get_reservs = (req,res,next)=>
{

  booking.find({creator:{$ne: req.userData.userId}})
  .then(otherResers=>{

   console.log('notMine');

   const reservs = [];

   otherResers.forEach(item=>{
     console.log("enter");

     const event = {
       creator : item.creator,
       Subject: item.Subject,
       StartTime: item.StartTime,
       EndTime: item.EndTime,
       Status : item.Status,
       IsReadonly: true,
       Id:item.Id,
       salle: item.salle,
      //  _id:item._id

     }

     reservs.push(event);

     console.log(reservs);


   });

   booking.find({creator:req.userData.userId})
   .then(mine=>{
        res.json({reservations:reservs.concat(mine)});
   });



  })
  .catch(err=>{
   console.log(err);
  });
}


module.exports.getBookings = (req,res,next)=>
{
  get_reservs(req,res,next);
}


