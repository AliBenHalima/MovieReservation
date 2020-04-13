var userController = require('./Controller/userController.js');
var mailController = require('./Controller/mailController.js');
var filmController = require('./Controller/films.js');

const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const upload = require('./routes/upload');
const app = express();
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//----------------AMASUO : show users in dashboard---------------
require('./Model/users');
const expressHandlebars = require('express-handlebars');

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
const UserController = require('./Controller/users');

app.set('views', path.join(__dirname, '/views/'));

app.engine(
	'hbs',
	expressHandlebars({
		extname: 'hbs',
		defaultLayout: 'mainlayout',
		layoutsDir: __dirname + '/views/layouts'
	})
);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.render('index', {});
});

const auth = require('./routes/auth');
app.use(cors(), auth);

app.use('/users', UserController);
app.use('/mail', mailController);
app.use('/films', filmController);

//----------------AMASUOend---------------

//----------------File Picker using Multer---------------

const bcrypt = require('bcrypt');

//----------------------------------------------------------

//--------------SessionConf-------------------------------------------------
//app.use(session({secret:'my secret',resave:false,saveUninitialized:false}));
//--------------------------------------------------------------------------

//-----------Routes------------------------
const multer = require('multer');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, '../src/assets/img/covers');
	},
	filename: (req, file, cb) => {
		cb(null, new Date().getTime().toString() + '_' + file.originalname);
	}
});

const checkAuth = require('./Controller/router_protector');
const bookings = require('./routes/bookings');

app.use(cors(), checkAuth, multer({ storage: storage }).single('file'), upload);
app.use('/Users', userController);
app.use(express.static(__dirname + '/images'));
app.use(cors(), bookings);
//-----------------------------------------

mongoose
	.connect('mongodb+srv://Admin:aoaj@auth-cluster-t0gpd.mongodb.net/test?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then((result) => {
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});

////////////////////////////////////////////
