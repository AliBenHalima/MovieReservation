const mongoose=require('mongoose');

const salleSchema=new mongoose.Schema({
    date :{type:Date,required:true},
    num :{type:Number,required:true},
    nbre :{type:Number,required:true,default:200},
    s1 :{type:Boolean,required:true},
    s2 :{type:Boolean,required:true},
    s3 :{type:Boolean,required:true},
    s4 :{type:Boolean,required:true},
    s5 :{type:Boolean,required:true},
    s6 :{type:Boolean,required:true},
    });
    
module.exports = mongoose.model('salle',salleSchema);