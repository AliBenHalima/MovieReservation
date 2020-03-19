module.exports = (req,res,next)=>
{ const jwt = require('jsonwebtoken');
  try{
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token,"my-secret-token-to-change-in-production");
    next();
  }
  catch(err)
  {
    res.json({isAuth:false});
  }
}
