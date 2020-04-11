const mongoose=require('mongoose');

const afficheSchema = new mongoose.Schema({
    name :{type:String,required:true},
    type :{type:String,required:true},
    description :{type: String , required:true},
    duree :{type: Date , required:true},
    rating :{type: Number , required:true},
    nomProducteur :{type: String , required:true},
    date :{type: Date, required:true},
    seance :{type: Number, required:true},
    salle :{type: Number, required:true},
    });
    
module.exports = mongoose.model('affiche',afficheSchema);
    
    