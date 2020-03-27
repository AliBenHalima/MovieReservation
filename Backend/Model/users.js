const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    email : String,
    pwd: String,
    username : String,
    });

    module.exports = mongoose.model('Users',userSchema);