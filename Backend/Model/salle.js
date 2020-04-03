const mongoose=require('mongoose');

const salleSchema=new mongoose.Schema({
    date :{type:Date,required:true},
    num :{type:Number,required:true},
    nbre :{type:Number,required:true,default:200}
    });

module.exports = mongoose.model('salle',salleSchema);
