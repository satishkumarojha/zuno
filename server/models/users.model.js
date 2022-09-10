const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstname:{type:String,required:[true,"Please Enter firstname"]},
    lastname:{type:String,required:[true,"Please Enter lastname"]},
    email:{type:String,required:[true,"Please Enter email"]},
    password:{type:String,required:[true,"Please Enter password"]}

},
{
    timestamps : true,
    versionKey : false,
})

userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password,8);
    this.password=hash;
    return next();
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user",userSchema);

module.exports=User;