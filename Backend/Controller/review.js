const  express = require("express");
const mongoose = require("mongoose");
const User = require('../Model/users');
var ObjectId = require('mongodb').ObjectId; 

const router = express.Router();
// const FilmModel = mongoose.model("movies");
const review = require('../Model/review');

router.post('/newreview',async (req, res) => {
  // var isposted = false ; 

   review.find({ "createdBy": req.body.createdBy,"PostedFor": ObjectId(req.body.PostedFor) },(err,docs)=>{ // check if user already poster a review or not
 
      if(Object.keys(docs).length === 0){ // check if object returns avalues or not (if a user has posted a review before or not)
      // Check if blog title was provided
    if (!req.body.title) {
      res.json({ success: false, message: 'review title is required.' }); // Return error message
    } else {
      // Check if blog body was provided
      if (!req.body.body) {
        res.json({ success: false, message: 'review body is required.' }); // Return error message
      } else {
        if (!req.body.ReviewRating) {
          res.json({ success: false, message: 'review Rating is required.' }); // Return error message
        } else {
        // Check if blog's creator was provided
        if (!req.body.createdBy) {
          res.json({ success: false, message: 'review creator is required.' }); // Return error
        } else {
          // Create the blog object for insertion into database
          const review_ = new review({
            title: req.body.title, // Title field
            body: req.body.body, // Body field
            ReviewRating : req.body.ReviewRating, 
            createdBy: req.body.createdBy,
            PostedFor: req.body.PostedFor // CreatedBy field // errror heere !!!!!!!!!!!
          });
          // Save blog into database
          review_.save((err) => {
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
              res.json({ success: true, message: 'review saved!' }); // Return success message
            }
          });
        }
      }
    }}
      
    }




    else{
      res.json({ success: false, message: 'You Already posted a review ! ' });
    
    
    }
  });
  });
  
  module.exports=router;