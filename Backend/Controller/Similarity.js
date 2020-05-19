const  express = require("express");
const mongoose = require("mongoose");
const User = require('../Model/users');
const test =require('./test.json');
const FilmModel = require('../Model/movie');
const router = express.Router();



router.get("/list", (req,res)=>{
    FilmModel.find((err,docs)=>{
        if(!err){
            res.send({ data: docs })
        }
        else{
            res.send("Error")
        }
    });
});






























module.exports=router;