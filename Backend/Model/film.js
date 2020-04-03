const mongoose=require('mongoose');

const filmSchema=new mongoose.Schema({
    name : {type:String,required:true,unique:true},
    type: {type:String,required:true},
    description :{type: String , required:true},
    duree :{type: Date , required:true},
    rating :{type: Number , required:true},
    nomProducteur :{type: String , required:true},
    category :{type: String , required:true}
    });

module.exports = mongoose.model('film',filmSchema);

