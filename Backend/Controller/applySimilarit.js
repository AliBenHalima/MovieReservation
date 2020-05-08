
const  express = require("express");
const mongoose = require("mongoose");
const User = require('../Model/users');
const test =require('./test.json');
const FilmModel = require('../Model/movie');
const UserModel = mongoose.model("users");
const blog = require('../Model/blog');
const review = require('../Model/review');
const fetch = require('node-fetch');
var ObjectId = require('mongodb').ObjectId; 
const router = express.Router();




// async function last(){
//     var x,y;
//     var response = await fetch('http://localhost:3000/similarity/listComments');
//     var commits = await response.json();

//     var response2 = await fetch('http://localhost:3000/similarity/listRatings');
//     var commits2 = await response2.json();
//     console.log(commits2);

//          console.log("foiaehfoeahgopazhgohzaôhgoâzhgp^hazpgh");
  
   
// }
// last();

async function last(){
    var listRatings=[];
    var finallist;
    var response = await fetch('http://localhost:3000/similarity/listComments');
    var listComments = await response.json();
    console.log(listComments);

    var response2 = await fetch('http://localhost:3000/similarity/listRatings');
     listRatings = await response2.json();
    console.log(listRatings);

    async function please(){
       

        
    listRatings.forEach(element=>{

        for(let i =0;i<listComments.length ;i++){
                if(element["createdBy"]==listComments[i]["name"]){
                    // console.log("first condition works");
                    // for(let k =1;k<Object.keys(listComments[i]).length ;k++){
                        for (var k in listComments[i]){
                            // console.log(k)
                            if(k=="name"){
                                continue;
                            }
                        if(k==element["movieName"]){
                            // console.log("2nd condition works");
                            listComments[i][k]=element["ReviewRating"];
                            // console.log("hellooooo");
                            // console.log( listComments[i][k]);
                        }else{
                            // if( listComments[i][k]!=null)
                            // listComments[i][k]=null;
                        }
                        
                }
                
            }else{
                // console.log("first condition doesnt works");
            }
       }
    });
   return finallist=listComments;
    }
    please();
console.log("here is final list ");

    console.log(finallist);
}
last();
// (async ()=>{
//     last();
//     var result= await please();
//     var listRatings = await result.json();
//     console.log(listRatings);
// })();




















module.exports=router;