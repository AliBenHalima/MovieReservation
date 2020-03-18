const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Admin:aoaj@auth-cluster-t0gpd.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology:true},(error)=>{
    if(!error){
        console.log("Succes connection DB");
    }
    else{
        console.log("Error connection DB");
    }
});

const User = require("./user.model");