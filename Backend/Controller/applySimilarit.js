
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
var finalList;



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
var similarity={};
function fan(name1){
    // if(name1==""){
    //     similarity=[];
    //     return  similarity;
    // }
    

   
 async function last(){
    var listRatings=[];
    
    var response = await fetch('http://localhost:3000/similarity/listComments');
    var listComments = await response.json();
    // console.log("this is list comments");
    // console.log(listComments);

    var response2 = await fetch('http://localhost:3000/similarity/listRatings');
     listRatings = await response2.json();
    //  console.log("this is list ratings");

    // console.log(listRatings);

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
    finalList=listComments;
    
   return finalList;
    }
   await please();

        // console.log("FINAL LIST");
        // console.log(finalList);
         
        for (var i = 0; i < finalList.length; i++) {
                
            var name = finalList[i].name;
        
            users[name] = finalList[i];
            
        }
        // console.log( users["SRO"]);
      var sem=   euclideanSimilarity();
        
        // module.exports.similarity=similarity; 
        // return  new  Promise(resolve => {
        //     resolve(similarity);  
    //   });
    console.log("New Values of Similarity")
    console.log("//////////////////");
    console.log(similarity)
    

    //     return  new  Promise(resolve => {
    //         resolve(similarity);  
    //   });

        // console.log("here is final list ");
        
        //     console.log({data:users});
   
   
}
last();
var users = {};


  function euclideanSimilarity() {
    
    if(users.hasOwnProperty(name1)){
    
    
    finalList.forEach(element=>{
        var name2=element.name;
        console.log("this is final list")
        console.log(finalList)
      
    var ratings1 = users[name1];
    // console.log("hi");
    // console.log( users["SRO"]);

    // console.log(users);


    var ratings2 = users[name2];

    var titles = Object.keys(ratings1);
    var i = titles.indexOf('name');
    titles.splice(i, 1);
 

    var sumSquares = 0;
    for (var i = 0; i < titles.length; i++) {
      var title = titles[i];
      var rating1 = ratings1[title];
      var rating2 = ratings2[title];
      if (rating1 != null && rating2 != null) {
        var diff = rating1 - rating2;
        sumSquares += diff * diff;
      }
    }
    var d = Math.sqrt(sumSquares);
    
     similarity[name2]=1 / (1 + d);
   console.log("Similarity is");
   console.log(similarity);
  
//    return similarity ;
     
    });
}
else{
    similarity=[];
}
    // var name2 = "jihed";
  
}

return similarity;
}

    
module.exports = {
    fan 
}

// module.exports.no =  new Promise(function(resolve){
  
    

//         resolve(similarity);
    
// });
    //         resolve(similarity);  
    //   }); ;
// exports.Calculation=Calculation;
// (async ()=>{
//     last();
//     var result= await please();
//     var listRatings = await result.json();
//     console.log(listRatings);
// })();

// }
// module.exports=router;