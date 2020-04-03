const booking = require('../Model/booking');
const { log } = require('console');

module.exports.saveChanges = (req,res,next)=>
{
  if (req.userData.userId)
  {
    req.body.forEach(item => {
    //  console.log(item);

    //--------find--------


    //---------------------

      const Newbooking = new booking({
        creator: req.userData.userId,
        Subject : item.Subject,
        StartTime: item.StartTime,
        EndTime: item.EndTime,
        salle:"dffd"
      });
      Newbooking.replaceOne({upsert:true})
      .then(res=>{
      })
      .catch(err=>{
        console.log(err);
        });
    });
  }
  else
  {
    res.json({isAuth:false});
  }

  res.json('yess');
}


module.exports.getBookings = (req,res,next)=>
{
   console.log('sssssss');
   booking.find({creator:req.userData.userId})
   .then(myReservations=>{
    console.log('mine');
    console.log(myReservations);
   // res.json({reservations:myReservations,IsReadonly:false});

   })
   .catch(err=>{
    console.log(err);
   });

   booking.find({creator:{$ne: req.userData.userId}})
   .then(otherResers=>{

    console.log('notMine');

    const others = [];

    otherResers.forEach(item=>{
      console.log("enter");

      const event = {
        Subject: item.Subject,
        StartTime: item.StartTime,
        EndTime: item.EndTime,
        IsReadonly: true,
        salle: item.salle,
        _id:item._id

      }

      others.push(event);

      console.log(others);

    });
    res.json({reservations:others});

   })
   .catch(err=>{
    console.log(err);
   });


}
