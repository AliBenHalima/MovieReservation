const  express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const FilmModel = mongoose.model("film");

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

router.get("/:id",async (req,res)=>{
    FilmModel.findOne({ "_id": req.params.id },((err,docs)=>{
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