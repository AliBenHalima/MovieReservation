const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    creator : { type: mongoose.Schema.Types.ObjectId,ref:'users', required: true },
    Subject : {type :String},
    StartTime : { type:Date },
    EndTime : {type:Date },
    salle : { type: String},
    Status : { type:String},
    Id: {type:String},
    //movie : { type: mongoose.Schema.Types.ObjectId,ref:'movies' }
    });

module.exports = mongoose.model('booking',bookingSchema);

