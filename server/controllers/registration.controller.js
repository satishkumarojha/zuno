const User = require("../models/users.model");
const jwt = require('jsonwebtoken');
require('dotenv').config()
const express = require("express");
const router = express.Router();

const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const generateToken = (user) => {
    return jwt.sign({user},process.env.secretkey)
}

 exports.register=catchAsyncErrors(async(req,res)=>{
    try{
       let user = await User.findOne({email : req.body.email})
       if(user){
           return res.status(400).send({message : "Email already exists" })
       }
        user = await User.create(req.body);
       const token = generateToken(user)
       return res.status(200).send({user,token});
    }
    catch(err){
       res.status(400).send({message : err.message})
       console.log(err);
    }
});
