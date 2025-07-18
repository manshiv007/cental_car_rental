const multer = require("multer")
const path = require("path")


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"..","public","uploads"))
    },
    filename:function(req,file,cb){
         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*100000)
         cb(null,uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({storage})

module.exports = upload