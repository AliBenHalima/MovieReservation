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

module.exports=router;
