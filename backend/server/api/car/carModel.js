const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
    default:""
   },
   brandId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Brand"
   },
   description:{
    type:String,
    required:true,
    default:""
   },
   createdAt:{
    type:Date,
    default:Date.now
   },
   image:{
    type:String,
    require:true,
    default:""
   },
   price:{
    type:String,
    required:true,
    default:""
   },
})

const Car = mongoose.model.Car || mongoose.model("Car",carSchema);

module.exports = Car