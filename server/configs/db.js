const mongoose = require("mongoose");

const connectDb = ()=>{
    return mongoose.connect("mongodb+srv://zuno:zuno123@cluster0.kwvhcmp.mongodb.net/zuno");
}

module.exports=connectDb;