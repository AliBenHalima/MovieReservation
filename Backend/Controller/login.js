const jwt = require('jsonwebtoken');
const User = require('../Model/users');
const bcrypt = require('bcrypt');

module.exports.signUp = (req,res,next)=>{
    console.log(req.body);
    if(req.body.email&&req.body.pwd&&req.body.username)
    {console.log("signup");
        User.findOne({email:req.body.email})
        .then(user=>{
            if(user)
            {
                console.log('user_exist');
                res.json('this user is already exit');
            }
            else{
                    console.log("enter");
                    bcrypt.hash(req.body.pwd,12)
                    .then(hashedPwd=>{
                        console.log(req.body.pwd);
                        console.log(hashedPwd);
                        const user = new User({
                            email:req.body.email,
                            pwd:hashedPwd,
                            username:req.body.username,
                            role:'Visitor'
                        });
                        user.save().then((user)=>res.json(user)).err((err)=>console.log(err));
                    });
            }
            });

    }
    else if (!req.body.email&&!req.body.pwd&&!req.body.username)
    res.json({error:'Email & Password & Username are required'});
    else if (!req.body.username)
    res.json({error:'Please enter the username'});
    else if(!req.body.email)
    res.json({error:'Please enter your Email'});
    else
    res.json({error:'Please enter Your Password'});
  }

module.exports.signIn = (req,res,next)=>
{console.log(req.body);
    console.log("helolo");
     if(req.body.email&&req.body.pwd){
        User.findOne({email:req.body.email})
        .then(user=>{
            if(user)
            {  bcrypt.compare(req.body.pwd,user.pwd)
               .then(bool=>{
                if(bool)
                {
                    console.log('logged in',user._id);

                    const token = jwt.sign({email:req.body.email,userId:user._id,role:'Admin'},"my-secret-token-to-change-in-production",{expiresIn:"1h"});
                    console.log(token);
                    res.json({token:token,expiresIn:3600,user:{username:user.username}});
                }
                else
                {
                    console.log('no match');
                    res.json({error:'wrong password'});
                }
               })
               .catch(err=>
                {
                    console.log(err);
                });
            }
            else
              res.json({error:'The email and password you entred did not match our records'});
        });
    }
    else if (!req.body.email&&!req.body.pwd)
      res.json({error:'Email & Password are required'});
    else if(!req.body.email)
      res.json({error:'Please enter your Email'});
    else
      res.json({error:'Please enter Your Password'});
}

module.exports.NewUser = (req,res,next)=>{
   res.json({msg:"succeed",user:req.body});
   console.log(req.body.email);
}

module.exports.changeRole = (req,res,next)=>{
  // console.log(req.body.id+""+req.body.role);
  let Role;
  nb = req.body.role;
  if(nb == 1)
  Role = 'Producer';
  else if(nb == 2 )
  Role = 'Moderator' ;
  else
  Role = 'Visitor';

  User.updateOne({_id:req.body.id},{role:Role})
  .then()
  .catch(err=>{console.log(err);});

}
