module.exports.checkAuth = (req,res,next)=>
{ const jwt = require('jsonwebtoken');
  try{
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    // console.log(token);
    const decodedToken = jwt.verify(token,"my-secret-token-to-change-in-production");
    console.log( "this is the decoded token ");
    console.log(decodedToken);
    req.userData = {email:decodedToken.email,userId:decodedToken.userId,role:decodedToken.role};
    next();
  }
  catch(err)
  {
    console.log("zdqssd");
    //console.log(req.headers.authorization);
    res.json({isAuth:false});
  }
}

const AccessControl = require('role-acl');

const ac = new AccessControl();

ac.grant('Admin')
    .execute('create').on('video')
    .execute('delete').on('video')
    .execute('read').on('video')
    .execute('update').on('video')
    .execute('manage').on('booking')

ac.grant('Producer')
    .execute('create').on('video')
    .execute('delete').on('video')
    .execute('read').on('video')
    .execute('update').on('video')
    .execute('manage').on('booking')

 ac.grant('Moderator')
    .execute('read').on('video')
    .execute('create').on('video')
    .execute('delete').on('video')
    .execute('update').on('video')

ac.grant('Client')
    .execute('read').on('video')


module.exports.isAuth4Booking = (req,res,next)=>
{
  const Role = req.userData.role;

  const permission = ac.can(Role).execute('manage').sync().on('booking');

  if(permission.granted)
    {
      next();
      console.log("yyy");
    }

  else
      res.json({isAuthoz:false});

}



module.exports.isAuth4Delete = (req,res,next)=>
{
  const Role = req.userData.role;

  const permission = ac.can(Role).execute('delete').sync().on('video');

  if(permission.granted)
    {
      next();
      console.log("yyy");
    }

  else
      res.json({isAuthoz:false});
}

module.exports.isAuth4Create = (req,res,next)=>
{
  const Role = req.userData.role;

  const permission = ac.can(Role).execute('create').sync().on('video');

  if(permission.granted)
    {
      next();
      console.log("yyy");
    }

  else
      res.json({isAuthoz:false});
}

module.exports.isAuth4Update = (req,res,next)=>
{}
