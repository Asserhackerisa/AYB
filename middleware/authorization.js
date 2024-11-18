const jwt=require('jsonwebtoken');
const jwtkey=process.env.key;
const verify=(req,res,next)=>
{
    
    const token=req.query.token;
    if(!token)
    {
        return res.status(401).json({error:"auth is required"});
    }

   
    try
    {
        const decode=jwt.verify(token,jwtkey);
        //console.log({"decoded token":decode});
        req.user = decode;
        next();
    }
    catch(err)
    {
        return res.status(401).json({error:"invalid token"});
    }
   
    
   
}
module.exports=verify;