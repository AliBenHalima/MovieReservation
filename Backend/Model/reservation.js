const mongoose=require('mongoose');

const reservationSchema=new mongoose.Schema({
    emailUser : {type:String,required:true,unique:true},
    date: {type:Date,required:true},
    seance :{type: String , required:true},
    salle :{type: Date , required:true},
    film :{type: String , required:true}
    });
    
module.exports = mongoose.model('reservation',reservationSchema);
    
    