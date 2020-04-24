const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    email : String,
    pwd: String,
    username : String,
    img : String,
    role: String
    });

    module.exports = mongoose.model('users',userSchema);
