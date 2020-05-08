const mongoose=require('mongoose');

const reservationSchema=new mongoose.Schema({
    userName : {type:String,required:true},
    name : {type:String,required:true},
    lastname : {type:String,required:true},
    phone : {type:String,required:true},
    nbPlaces : {type:String,required:true},
    date: {type:Date,required:true},
    salle :{type: String , required:true},
    film :{type: String , required:true}
    });
    
module.exports = mongoose.model('reservation',reservationSchema);
    
    