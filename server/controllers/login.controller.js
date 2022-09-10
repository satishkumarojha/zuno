const User = require("../models/users.model");
const jwt = require('jsonwebtoken');
const ErrorHandler = require("../utils/errorHandler");
require('dotenv').config();
const generateToken = (user) => {
    return jwt.sign({user},process.env.secretkey)
}

exports.login =async(req,res,next)=>{
    try{
        const user = await User.findOne({email : req.body.email})
        //checked if mail exists
        if(!user){
            return next(new ErrorHandler("Wrong email or password",400));
        }

        //if email exists, check password;
        const match = user.checkPassword(req.body.password)

        // if it doesn't match
        if(!match){
            return next(new ErrorHandler("Wrong email or password",400));
        }

        // if it matches
        const token = generateToken(user)
        console.log("trial22")
        return res.status(200).send({success:true,user,token});
    }
    catch(err){
        return next(new ErrorHandler(500,"Internal server error"));
    }
}


