const connection = require("./model");
const express = require("express");
const application = express();
const path=require("path");
const expressHandlebars=require("express-handlebars");
const bodyParser=require("body-parser");

application.use(bodyParser.json());
application.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const UserController = require("./controllers/users");





application.set('views',path.join(__dirname,"/views/"))

application.engine("hbs",expressHandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir: __dirname + "/views/layouts" 
}));

application.set("view engine","hbs"); 

application.get("/",(req,res)=>{
    res.render("index",{})
});

application.use("/users",UserController);

application.listen("3000",()=>{
    console.log("Server started on 3000");
});