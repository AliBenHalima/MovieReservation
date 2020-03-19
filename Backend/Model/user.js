
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
email : {type:String,required:true,unique:true},
pwd: {type:String,required:true},
username :{type : String , required:true}
});

module.exports = mongoose.model('user',userSchema);


