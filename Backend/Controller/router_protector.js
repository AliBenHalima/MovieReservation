module.exports = (req,res,next)=>
{ const jwt = require('jsonwebtoken');
  try{
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    // console.log(token);
    const decodedToken = jwt.verify(token,"my-secret-token-to-change-in-production");
    console.log( "this is the decoded token ");
    console.log(decodedToken);
    req.userData = {email:decodedToken.email,userId:decodedToken.userId};
    console.log('please work');
    console.log(req.userData);
    next();
  }
  catch(err)
  {
    console.log("zdqssd");
    //console.log(req.headers.authorization);
    res.json({isAuth:false});
  }
}
