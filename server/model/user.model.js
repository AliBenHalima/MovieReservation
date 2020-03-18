const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    pwd : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
});

mongoose.model("User", UserSchema)