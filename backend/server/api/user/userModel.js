const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:""
    },
    email:{
        type:String,
        required:true,
        default:""
    },
    password:{
        type:String,
        required:true,
        default:"",
    },
    phone:{
        type:String,
        default:"",
        required:true
    },
    address:{
        type:String,
        required:true,
        default:""
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    status:{
        type:Boolean,
        default:true
    },
    userType:{
        type:String,
        enum:["admin","renter","hirer"],
        
    },
})

const User = mongoose.models.User || mongoose.model("User",userSchema);

module.exports = User