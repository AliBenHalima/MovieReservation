const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const session = require('express-session');
const cors = require('cors');




app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//----------------File Picker using Multer---------------

const bcrypt = require('bcrypt');

const multer = require('multer');
const fileStorage = multer.diskStorage({
    destination : (req,file,cb)=>{ cb(null,'images'); },
    filename : (req,file,cb)=>{ cb(null,file.filename+'_'+file.originalname); }
});

const filefilter = (req,file,cb)=>{
    const ext = path.extname(file.originalname);
    if (ext == '.png' || ext == '.jpg' ||  ext == '.jpeg')
    cb(null,true);
    else
    cb(null,false);
};
app.use(multer({storage : fileStorage,fileFilter : filefilter}).single('filepicker')); //single ---> one file to pick


//----------------------------------------------------------


//--------------SessionConf-------------------------------------------------
//app.use(session({secret:'my secret',resave:false,saveUninitialized:false}));
//--------------------------------------------------------------------------


//-----------Routes------------------------
const auth = require('./routes/auth');
app.use(cors(),auth);

//-----------------------------------------



mongoose.connect('mongodb+srv://Admin:aoaj@auth-cluster-t0gpd.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology:true})
.then(result=>{
    app.listen(3000);

})
.catch(err=>{
    console.log(err);
});

