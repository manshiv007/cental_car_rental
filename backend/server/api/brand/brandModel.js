const mongoose = require("mongoose")
const brandSchema = new mongoose.Schema({
    
        name:{
            type:String,
            required:true,
            default:""
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
    
})

const Brand = mongoose.models.Brand || mongoose.model("Brand",brandSchema);
module.exports = Brand
