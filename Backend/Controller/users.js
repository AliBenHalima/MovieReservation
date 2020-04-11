const  express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const UserModel = mongoose.model("users");



router.get("/list",async (req,res)=>{
    UserModel.find((err,docs)=>{
        if(!err){
            res.send({ data: docs })
        }
        else{
            res.send("Error")
        }
    });
});

router.get("/:id",async (req,res)=>{
    UserModel.findOne({ "_id": req.params.id },((err,docs)=>{
        if(!err){
            res.send({ data: docs })
        }
        else{
            res.send("Error")
        }
    }));
});

router.get("/:name",async (req,res)=>{
    UserModel.findOne({ "name": req.params.name },((err,docs)=>{
        if(!err){
            res.send({ data: docs })
        }
        else{
            res.send("Error")
        }
    }));
}
);

module.exports=router;