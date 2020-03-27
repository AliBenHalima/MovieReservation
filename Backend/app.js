var userController = require('./Controller/userController.js');
var mailController = require('./Controller/mailController.js');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const upload = require('./routes/upload');
const app = express();
const session = require('express-session');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//----------------AMASUO : show users in dashboard---------------
require('./Model/user');
const expressHandlebars = require("express-handlebars");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const UserController = require("./Controller/users");

app.set('views', path.join(__dirname, "/views/"))

app.engine("hbs", expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index", {})
});

app.use("/users", UserController);
app.use("/mail", mailController);


//----------------AMASUOend---------------



//----------------File Picker using Multer---------------

const bcrypt = require('bcrypt');

const multer = require('multer');
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, 'images'); },
    filename: (req, file, cb) => { cb(null, file.filename + '_' + file.originalname); }
});

const filefilter = (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext == '.png' || ext == '.jpg' || ext == '.jpeg')
        cb(null, true);
    else
        cb(null, false);
};
app.use(multer({ storage: fileStorage, fileFilter: filefilter }).single('filepicker')); //single ---> one file to pick


//----------------------------------------------------------


//--------------SessionConf-------------------------------------------------
//app.use(session({secret:'my secret',resave:false,saveUninitialized:false}));
//--------------------------------------------------------------------------


//-----------Routes------------------------
const auth = require('./routes/auth');
app.use(cors(), auth);
app.use(cors(), upload);

//-----------------------------------------
app.use('/Users', userController);


mongoose.connect('mongodb+srv://Admin:aoaj@auth-cluster-t0gpd.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(3000);

    })
    .catch(err => {
        console.log(err);
    });

