const  express = require("express");
const mongoose = require("mongoose");
const User = require('../Model/users');
const test =require('./test.json');

const router = express.Router();
// const FilmModel = mongoose.model("movies");
const blog = require('../Model/blog');
const review = require('../Model/review');


router.get("/list",async (req,res)=>{

  blog.find((err,docs)=>{
      if(!err){
          res.send({ data: docs })
      }
      else{
          res.send("Error")
      }
  });
});


router.get("/liste",async (req,res)=>{
const data = test;
          // console.log(resu);
 
          res.send(data);
   
});
const fetch = require("node-fetch");
router.get("/listee",async (req,res)=>{
  const data= await fetch('http://localhost:3000/comments/liste');
  const resu = await data.text();

          console.log(resu);
 
          res.send(resu);
   
});


router.get("/:id",async (req,res)=>{
  // console.log( req.userData.userId);
  // console.log( req.userData.userId);
  blog.find({ PostedFor: req.params.id },((err,docs)=>{
    if(!err){
        res.send({ data: docs })
    }
    else{
        res.send("Movie doesnt exist!? ")
    }
}));
});


router.get("/Reviews/:id",async (req,res)=>{
  review.find({ PostedFor: req.params.id },((err,docs)=>{
    if(!err){
        res.send({ data: docs })
    }
    else{
        res.send("Movie doesnt exist!? ")
    }
}));
});

router.get("/Reviews/Rating/:id",async (req,res)=>{
  review.find({ PostedFor: req.params.id },((err,docs)=>{
    if(!err){
        res.send({ data: docs })
    }
    else{
        res.send("Movie doesnt exist!? ")
    }
}));
});


router.post('/newComment', (req, res) => {
    // Check if blog title was provided
    if (!req.body.title) {
      res.json({ success: false, message: 'blog title is required.' }); // Return error message
    } else {
      // Check if blog body was provided
      if (!req.body.body) {
        res.json({ success: false, message: 'blog body is required.' }); // Return error message
      } else {
        // Check if blog's creator was provided
        if (!req.body.createdBy) {
          res.json({ success: false, message: 'blog creator is required.' }); // Return error
        } else {
          // Create the blog object for insertion into database
          const blog_ = new blog({
            title: req.body.title, // Title field
            body: req.body.body, // Body field
            createdBy: req.body.createdBy,
            PostedFor: req.body.PostedFor // CreatedBy field // errror heere !!!!!!!!!!!
          });
          // Save blog into database
          blog_.save((err) => {
            // Check if error
            if (err) {
              // Check if error is a validation error
              if (err.errors) {
                // Check if validation error is in the title field
                if (err.errors.title) {
                  res.json({ success: false, message: err.errors.title.message }); // Return error message
                } else {
                  // Check if validation error is in the body field
                  if (err.errors.body) {
                    res.json({ success: false, message: err.errors.body.message }); // Return error message
                  } else {
                    res.json({ success: false, message: err }); // Return general error message
                  }
                }
              } else {
                res.json({ success: false, message: err }); // Return general error message
              }
            } else {
              res.json({ success: true, message: 'blog saved!' }); // Return success message
            }
          });
        }
      }
    }
  });

  router.get('/publicProfile', (req, res) => {
    // Check if username was passed in the parameters
    if (!req.params.username) {
      res.json({ success: false, message: 'No username was provided' }); // Return error message
    } else {
      // Check the database for username
      User.findOne({ username: req.params.username }).select('username email').exec((err, user) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Something went wrong.' }); // Return error message
        } else {
          // Check if user was found in the database
          if (!user) {
            res.json({ success: false, message: 'Username not found.' }); // Return error message
          } else {
            console.log( user.username );
            res.json( user.username ); // Return the public user's profile data
          }
        }
      });
    }
  });



  router.put('/likeComment', (req, res) => {
    // Check if id was passed provided in request body
    if (!req.body.id) {
      res.json({ success: false, message: 'No id was provided.' }); // Return error message
    }else {
      if(!req.body.createdBy){
        res.json({ success: false, message: 'User not Logged in' }); // Return error message
      }
    else {
      // Search the database with id
      blog.findOne({ _id: req.body.id }, (err, blog) => {
        // Check if error was encountered
        if (err) {
          res.json({ success: false, message: 'Invalid blog id' }); // Return error message
        } else {
          // Check if id matched the id of a blog post in the database
          if (!blog) {
            res.json({ success: false, message: 'That blog was not found.' }); // Return error message
          } else {
                    // Check if the user who liked the post has already liked the blog post before
                    if (blog.likedBy.includes(req.body.username)) {
                      blog.likes--;
                      const arrayIndex = blog.likedBy.indexOf(req.body.username); // Get the index of the username in the array for removal
                      blog.likedBy.splice(arrayIndex, 1); // Remove user from array
                     // Increment likes

                      res.json({ success: false, message: 'You already liked this post.' });
                       // Return error message
                    } else {
                      // Check if user who liked post has previously disliked a post
                      if (blog.dislikedBy.includes(req.body.username)) {
                        blog.dislikes--; // Reduce the total number of dislikes
                        const arrayIndex = blog.dislikedBy.indexOf(req.body.username); // Get the index of the username in the array for removal
                        blog.dislikedBy.splice(arrayIndex, 1); // Remove user from array
                        blog.likes++; // Increment likes
                        blog.likedBy.push(req.body.username); // Add username to the array of likedBy array
                        // Save blog post data
                        blog.save((err) => {
                          // Check if error was found
                          if (err) {
                            res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                          } else {
                            res.json({ success: true, message: 'blog liked!' }); // Return success message
                          }
                        });
                      } else {
                        blog.likes++; // Incriment likes
                        blog.likedBy.push(req.body.username); // Add liker's username into array of likedBy
                        // Save blog post
                        blog.save((err) => {
                          if (err) {
                            res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                          } else {
                            res.json({ success: true, message: 'blog liked!' }); // Return success message
                          }
                        });
                      }
                    }
                  }
                }

            });
          }
        }});



  router.put('/dislikeComment', (req, res) => {
   // console.log(req.body.username);
    // Check if id was provided inside the request body
    if (!req.body.id) {
      res.json({ success: false, message: 'No id was provided.' }); // Return error message
    }else {
      if(!req.body.createdBy){
        res.json({ success: false, message: 'User not Logged in !' }); // Return error message
      }
    else {
      // Search database for blog post using the id
      blog.findOne({ _id: req.body.id }, (err, blog) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid blog id' }); // Return error message
        } else {
          // Check if blog post with the id was found in the database
          if (!blog) {
            res.json({ success: false, message: 'That blog was not found.' }); // Return error message
          } else {
            // Get data of user who is logged in

                    // Check if user who disliked post has already disliked it before
                    if (blog.dislikedBy.includes(req.body.username)) {
                      res.json({ success: false, message: 'You already disliked this post.' }); // Return error message
                    } else {
                      // Check if user has previous disliked this post
                      if (blog.likedBy.includes(req.body.username)) {
                        blog.likes--; // Decrease likes by one
                        const arrayIndex = blog.likedBy.indexOf(req.body.username); // Check where username is inside of the array
                        blog.likedBy.splice(arrayIndex, 1); // Remove username from index
                        blog.dislikes++; // Increase dislikeds by one
                        blog.dislikedBy.push(req.body.username); // Add username to list of dislikers
                        // Save blog data
                        blog.save((err) => {
                          // Check if error was found
                          if (err) {
                            res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                          } else {
                            res.json({ success: true, message: 'blog disliked!' }); // Return success message
                          }
                        });
                      } else {
                        blog.dislikes++; // Increase likes by one
                        blog.dislikedBy.push(req.body.username); // Add username to list of likers
                        // Save blog data
                        blog.save((err) => {
                          // Check if error was found
                          if (err) {
                            res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                          } else {
                            res.json({ success: true, message: 'blog disliked!' }); // Return success message
                          }
                        });
                      }
                    }
                  }
                }
              });
          }
    }
      });






  router.get('/profile', (req, res) => {
    console.log("hello");

    console.log(req.userId);

    // Search for user in database
    // User.findOne({ _id: req.decoded.userId }).select('username email').exec((err, user) => {
    //   // Check if error connecting
    //   if (err) {
    //     res.json({ success: false, message: err }); // Return error
    //   } else {
    //     // Check if user was found in database
    //     if (!user) {
    //       res.json({ success: false, message: 'User not found' }); // Return error, user was not found in db
    //     } else {
    //       res.json( user ); // Return success, send user object to frontend for profile
    //     }
    //   }
    // });
  });

  router.get('/singleComment/:id', (req, res) => {
    // Check if id is present in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No blog ID was provided.' }); // Return error message
    } else {
      // Check if the blog id is found in database
      blog.findOne({ _id: req.params.id }, (err, blog) => {
        // Check if the id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid blog id' }); // Return error message
        } else {
          // Check if blog was found by id
          if (!blog) {
            res.json({ success: false, message: 'Blog not found.' }); // Return error message
           }
          //  else {
          //   // Find the current user that is logged in
          //   User.findOne({ _id: req.decoded.userId }, (err, user) => {
          //     // Check if error was found
          //     if (err) {
          //       res.json({ success: false, message: err }); // Return error
          //     } else {
          //       // Check if username was found in database
          //       if (!user) {
          //         res.json({ success: false, message: 'Unable to authenticate user' }); // Return error message
          //       } else {
          //         // Check if the user who requested single blog is the one who created it
          //         if (user.username !== blog.createdBy) {
          //           res.json({ success: false, message: 'You are not authorized to eidt this blog.' }); // Return authentication reror
          //         }
          else {
                    res.json({ success: true, blog: blog }); // Return success
                  }
          //       }
          //     }
          //   });
          // }
        }
      });
    }
  });



  router.delete('/deleteComment/:id', (req, res) => {
    // Check if ID was provided in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No id provided' }); // Return error message
    } else {
      // Check if id is found in database
      blog.findOne({ _id: req.params.id }, (err, blog) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid id' }); // Return error message
        } else {
          // Check if blog was found in database
          if (!blog) {
            res.json({ success: false, messasge: 'Blog was not found' }); // Return error message
          } else {
            // Get info on user who is attempting to delete post

              // Check if error was found

                    // Remove the blog from database
                    blog.remove((err) => {
                      if (err) {
                        res.json({ success: false, message: err }); // Return error message
                      } else {
                        res.json({ success: true, message: 'Comment deleted!' }); // Return success message
                      }
                    });
                  }




          }

      });
    }
  });



  router.put('/updateComment', (req, res) => {
    // Check if id was provided
    if (!req.body._id) {
      res.json({ success: false, message: 'No blog id provided' }); // Return error message
    } else {
      // Check if id exists in database
      blog.findOne({ _id: req.body._id }, (err, blog) => {
        // Check if id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid blog id' }); // Return error message
        } else {
          // Check if id was found in the database
          if (!blog) {
            res.json({ success: false, message: 'Blog id was not found.' }); // Return error message
          }
          else {
            blog.title = req.body.title; // Save latest blog title
            blog.body = req.body.body; // Save latest body
            blog.save((err) => {
              if (err) {
                if (err.errors) {
                  res.json({ success: false, message: 'Please ensure form is filled out properly' });
                } else {
                  res.json({ success: false, message: err }); // Return error message
                }
              } else {
                res.json({ success: true, message: 'Comment Updated!' }); // Return success message
              }
            });
          }
    }
  });
} });



module.exports=router;
