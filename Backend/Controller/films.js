const  express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
// const FilmModel = mongoose.model("movies");
const FilmModel = require('../Model/movie');

router.get("/list",async (req,res)=>{
    FilmModel.find((err,docs)=>{
        if(!err){
            res.send({ data: docs })
        }
        else{
            res.send("Error")
        }
    });
});

// router.get("/Latest",async (req,res)=>{
//     .limit(1).sort({$natural:-1})
//     console.log( FilmModel.find().limit(4));
//     FilmModel.find({} ,{limit:1}).then(function (err, docs) {
//         if(!err){
//             res.send({data:docs});
//         }else{
//             console.log(err);
//         }
    
// },function(err){
//     console.log(err);
// });
// });


router.get("/:name",async (req,res)=>{
    FilmModel.findOne({ name: req.params.name },((err,docs)=>{
        if(!err){
            res.send({ data: docs })
        }
        else{
            res.send("Error")
        }
    }));
});

router.get("/image/:file",async (req,res)=>{
    FilmModel.findOne({ file: req.params.file },((err,docs)=>{
        if(!err){
            res.send({ data: docs })
        }
        else{
            res.send("Error")
        }
    }));
});
// res.send({ data: docs })

router.put('/UpdateMovieRating/:id', (req, res) => {
    // Check if id was provided
    if (!req.params.id) {
      res.json({ success: false, message: 'No movie id provided' }); // Return error message
    } else {
      // Check if id exists in database
      FilmModel.findOne({ _id: req.params.id }, (err, movie) => {
        // Check if id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid movie id' }); // Return error message
        } else {
          // Check if id was found in the database
          if (!movie) {
            res.json({ success: false, message: 'movie id was not found.' }); // Return error message
          }
          else {
             // Save latest blog title
            movie.rating = req.body.rating; // Save latest body
            movie.save((err) => {
              if (err) {
                if (err.errors) {
                  res.json({ success: false, message: 'Please ensure form is filled out properly' });
                } else {
                  res.json({ success: false, message: err }); // Return error message
                }
              } else {
                res.json({ success: true, message: 'movie Updated!' }); // Return success message
              }
            });
          }
    }
  });
} });




module.exports=router;
