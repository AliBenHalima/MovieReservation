const mongoose=require('mongoose');

const salleSchema=new mongoose.Schema({
    num :{type:Number,required:true},
    nbre :{type:Number,required:true,default:200},
    placesdispo:{type:Number,required:true}
    });

module.exports = mongoose.model('salle',salleSchema);
