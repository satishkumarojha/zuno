require("dotenv").config();
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");

const verifyToken = (token)=>{
    return new Promise((resolve,reject) => {
        jwt.verify(token, process.env.secretkey, (err,decoded) => {
            if(err) return reject(err)
    
            return resolve(decoded)
        });
    })
}

const authenticate = async (req,res,next)=>{

    if(!req.headers.authorization)
    return next(new ErrorHandler("Authorization token not found or incorrect",400));

    if(!req.headers.authorization.startsWith("Bearer "))
    return next(new ErrorHandler("Authorization token not found or incorrect",400));

    const token = req.headers.authorization.trim().split(" ")[1];

    let decoded

    try{
        decoded = await verifyToken(token)
    }
    catch(err){
        return  next(new ErrorHandler("Authorization token not found or incorrect",400));
    }
    req.userId = decoded.user._id
    req.mail = decoded.user.email

    return next();

}

module.exports =authenticate;