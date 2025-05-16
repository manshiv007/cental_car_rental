const mongoose = require("mongoose")
require("dotenv").config()

const createDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connect successfully")

    }catch(err){
         console.log("monodb is not connected:",err)
         process.exit(1)
    }
}

module.exports = createDB