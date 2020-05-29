

const express = require("express");
const mongoose = require("mongoose");
const similar= require("./applySimilarit.js");

const router = express.Router();

const ReservationModel = require('../Model/reservation');
const  Reservation = require('../Model/reservation');

router.post('/newReservation',async (req,res)=>{
    var rsv = new Reservation({
        userName : req.body.userName,
        name : req.body.name,
        lastname : req.body.lastname,
        phone : req.body.phone,
        nbPlaces : req.body.nbPlaces,
        date: req.body.date,
        salle :req.body.salle,
        film :req.body.film
    });
    rsv.save((err) => {
        // Check if error
        if (err) {
          // Check if error is a validation error
          if (err.errors) {
            // Check if validation error is in the title field
            if (err.errors.title) {
              res.json({ success: false, message: err.errors.title.message }); // Return error message
            } else {
              // Check if validation error is in the body field
              if (err.errors.body) {
                res.json({ success: false, message: err.errors.body.message }); // Return error message
              } else {
                res.json({ success: false, message: err }); // Return general error message
              }
            }
          } else {
            res.json({ success: false, message: err }); // Return general error message
          }
        } else {
          res.json({ success: true, message: 'reservation saved!' }); // Return success message
        }
      });})

// get the 

router.get('/getMoviesReservedByUser/:username', async (req,res)=>{
  // if (req.params.username== "") {
  //   res.send({ success: false, message: 'You must Log in to get to get Recommanded movies' ,data : []}); 
  // }
  let x=   similar.fan(req.params.username);
  // var x= similar.similarity;
  // res.send({data : x})
  console.log("this xXXXX");
  console.log(x);
  var sortable = [];
  for (var user in x) {
      sortable.push([user, x[user]]);
  }

  sortable.sort(function(a, b) {
      return   b[1] - a[1];
  });
  sortable.splice(0,1);
  if( sortable.length == 0){
    // x=[];

    res.send({success: false, message: "no reservation Available for recommandation",data : [x]});
   
  }
  else{
   await ReservationModel.find({ userName: sortable[0][0] },(async (err,docs)=>{
      if(!err){
        // var x= await similar.Calculation();
        x=[];
       
       res.send({success: true ,data : docs , message : "all good"})
      }
      else{
          res.send("Error")
      }
  }))
  }
  // console.log("this sortable");
  // console.log(sortable);
  
  // console.log(sortable[0][0]);

    // res.send({ data: sortable })
   
    
    // res.send({data : sortable})
     
 
  

   
}
);
//Object.keys(x)[6]



module.exports=router;

