const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const BookingModel = require('../Model/booking');
const MovieModel = require('../Model/movie');


router.get("/:name",async (req,res)=>{
    BookingModel.findOne({ Status: req.params.name },((err,docs)=>{
        if(!err){
            res.send({ data: docs })
        }
        else{
            res.send("Error")
        }
    }));
});

router.get("/dates/:name",async (req,res)=>{
    BookingModel.find({ Status: req.params.name },((err,docs)=>{
        if(!err){
            res.send({ data: docs })
        }
        else{
            res.send("Error")
        }
    }));
});

router.post("/getObjectForRoom",async (req,res)=>{
    console.log(req.body.film+req.body.date);
    BookingModel.find({ Status: req.body.film },((err,docs)=>{
        if(!err){
            res.send({ data: docs })
        }
        else{
            res.send("Error")
        }
    }));
});


module.exports=router;