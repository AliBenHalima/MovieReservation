
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var  User  = require('../Model/users');

// => localhost:3000/Users/
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});

const multer = require('multer');
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{ cb(null,'images'); },
    filename : (req,file,cb)=>{ cb(null,new Date().getTime().toString()+'_'+file.originalname); }
});

router.post('/',multer({storage:storage}).single("image"), (req, res) => {

        console.log("helloe");

         let img = null;
        if(req.file)
        {
          img = req.file.filename;
        }

        console.log(req.body.email);
        console.log(req.body.pwd);
        console.log(req.body.username);
    var emp = new User({
        username: req.body.email,
        pwd: req.body.pwd,
        email: req.body.username,
        img: img
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });

   }

);

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        username: req.body.email,
        pwd: req.body.pwd,
        email: req.body.username,
    };
    User.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
