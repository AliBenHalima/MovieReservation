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
 var users_={} ; 
 var movies=[] ;
 var comments=[]; 
 var reviews=[]; 
 var users_names= [];
 var movies_names=[];
 var reviews2=[];


 async function getMovieNameby_id(id){
    var result1 ; 
   await FilmModel.find({"_id":ObjectId(id)},(err,docs)=>{
    console.log("thissss");
      console.log(docs);
    //   result1=  docs[0].name;
 });
 return result1 ;
  
}


router.get("/:id",async (req,res)=>{
    await FilmModel.find({"_id":ObjectId(req.params.id)},(err,docs)=>{
        console.log("thissss");
          console.log(docs);
          res.send({ data: docs })
        //   result1=  docs[0].name;
     });
});







router.get("/listMovies", (req,res)=>{
    // console.log(reviews2);
    FilmModel.find((err,docs)=>{
        if(!err){
            movies= docs;
            res.send({ data: docs })
           console.log({movies:docs});
        }
        else{
            res.send("Error")
        }
    });
});

(async (req,res)=>{
    await review.find((err,docs)=>{
        if(!err){
          reviews = docs;
          console.log(reviews);
          reviews.forEach(element=>{

          })

        
        }
        });

    await UserModel.find((err,docs)=>{
        
        users_= docs;
        users_.forEach(
            // element =>{   console.log(element.username)});
            element =>{ users_names.push({"name":element.username})});

        // console.log(users_names);
            // users_= docs;
            // console.log(users_={data:docs});
            // res.send({ data: docs })
    }); 
    FilmModel.find((err,docs)=>{
        if(!err){
            movies= docs;
            movies.forEach(
                // element =>{   console.log(element.username)});
                element =>{ movies_names.push(element.name)});
                // console.log(movies_names);
        }
        console.log(users_names);
        console.log(movies_names);
        console.log("2nd users");
        for(let i =0;i<users_names.length ;i++){
            for(let j =0;j<movies_names.length ;j++)
            users_names[i][movies_names[j]]=0;
        }

        

        console.log(users_names);
    });
    //reieeeews

    await  review.find({}, {_id:0,createdAt:0,title:0,body:0,__v:0},async(err,docs)=>{
        
        reviews2 = docs;
        console.log("with hi");
        console.log(reviews2);
        // for(let j =0;j<reviews2.length ;j++)
        // reviews2[j]["MovieName"]="hello";
    
        reviews2.forEach( element=>{
            (async()=>{
               var x= await getMovieNameby_id(element.PostedFor);
               element["movieName"]=x;
               console.log(element);

    //            for(let i =0;i<users_names.length ;i++){
    //             if(element["createdBy"]==users_names[i]["name"]){
    //                 console.log("first condition works");
    //                 for(let k =1;k<users_names[i].length ;k++){
    //                     if(users_names[i][k]==element["movieName"]){
    //                         console.log("2nd condition works");
    //                         users_names[i][k]=element["ReviewRating"];
    //                         console.log("hellooooo");
    //                         console.log( users_names[i][k]);
    //                     }else{
    //                         console.log("2nd condition doesnt works");
    //                     }
                        
    //             }
                
    //         }
    //    }

            //    console.log(x);
            })(); 
        });
        console.log("rgrz");
        console.log(users_names);
    });
    



    await blog.find((err,docs)=>{
        if(!err){
            comments = docs;
    }});
    
   



    })();


router.get("/listComments", (req,res)=>{
    blog.find((err,docs)=>{
        if(!err){
            comments = docs;
            res.send(users_names );
        }
        else{
            res.send("Error")
        }
    });
});

router.get("/listRatings", (req,res)=>{
    blog.find((err,docs)=>{
        if(!err){
            comments = docs;
            res.send( reviews2 );
        }
        else{
            res.send("Error")
        }
    });
});




router.get("/listReviews",async (req,res)=>{
    review.find((err,docs)=>{
      if(!err){
        reviews = docs;
        res.send({ reviews: docs });
      }
      else{
          res.send("Error")
      }
  });
});
 
// router.get("/listReviewsName",async (req,res)=>{
//    await  review.find({}, {_id:0,createdAt:0,title:0,body:0,__v:0},async(err,docs)=>{
        
//         reviews2 = docs;
//         console.log("with hi");
//         console.log(reviews2);
//         // for(let j =0;j<reviews2.length ;j++)
//         // reviews2[j]["MovieName"]="hello";
    
//         reviews2.forEach( element=>{
//             (async()=>{
//                var x= await getMovieNameby_id(element.PostedFor);
//                element["movieName"]=x;
//                console.log(element);
//             //    console.log(x);
//             })();
          
//         //    element["movieName"]="hello";
//         //    element["movieName"]="hi";
        
//         });
//         console.log("After rev2 modification");
      
//         //  var res = await getMovieNameby_id("5e944094641bc3185cff1892");
//          console.log("gug");
//             // console.log(res);
       
      
        
//     });
    

// });
// (async ()=>{
//     await fetch('http://localhost:3000/similarity/listUsers');
//     
// })();
(()=>{
    console.log(`hello ${users_}`);

})();
var users = {};

// for (var i = 0; i < users_.length; i++) {
//   var name = users_[i].username;
//   users[name] = users[i];

// }
// console.log(users[name]);


 

// async function last(){
//     var x,y;
//     var response = await fetch('http://localhost:3000/similarity/listComments');
//     var listComments = await response.json();
//     console.log(listComments);

//     var response2 = await fetch('http://localhost:3000/similarity/listRatings');
//     var listRatings = await response2.json();
//     console.log(listRatings);

//     async function please(){
//         var finallist;

    
//     listRatings.forEach( element=>{

//         for(let i =0;i<listComments.length ;i++){
//                 if(element["createdBy"]==listComments[i]["name"]){
//                     console.log("first condition works");
//                     for(let k =1;k<users_names[i].length ;k++){
//                         if(listComments[i][k]==element["movieName"]){
//                             console.log("2nd condition works");
//                             listComments[i][k]=element["ReviewRating"];
//                             console.log("hellooooo");
//                             console.log( listComments[i][k]);
//                         }else{
//                             console.log("2nd condition doesnt works");
//                         }
                        
//                 }
                
//             }
//        }
//     });
//    return finallist=listComments;
//     }
    
// }
// (async ()=>{
//     last();
//     var result= await please();
//     var listRatings = await result.json();
// })();






























module.exports=router;