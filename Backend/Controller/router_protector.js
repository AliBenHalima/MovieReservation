module.exports = (req,res,next)=>
{ const jwt = require('jsonwebtoken');
  try{
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    // console.log(token);
    const decodedToken = jwt.verify(token,"my-secret-token-to-change-in-production");
    console.log(decodedToken);
    req.userData = {email:decodedToken.email,userId:decodedToken.userId};
    next();
  }
  catch(err)
  {
    console.log("zdqssd");
    //console.log(req.headers.authorization);
    res.json({isAuth:false});
  }
}
