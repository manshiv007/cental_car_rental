const User  = require("../api/user/userModel")
require("dotenv").config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const seedAdmin = async (req, res) => {
  try {
    const user = await User.findOne({ email: "admin@gmail.com" });
    if (!user) {
      const hashedPassword = await bcrypt.hash("123456", 10);
      const adminObj = new User({
        name: "admin",
        email: "admin@gmail.com",
        password: hashedPassword,
        phone: "564546757",
        address: "india",
        userType: "admin"
      });
      await adminObj.save();
      console.log("admin created successfully");
    } else {
      console.log("admin already exists");
    }
  } catch (err) {
    console.log("error seeding admin:", err);
  }
};




const loginAdmin = async(req,res) =>{
    try{
        
        const {email,password,userType} = req.body
        // console.log(email)
        // console.log(password)
        // console.log(userType)
        if(userType !== "admin"){
            return res.json({
                status:400,
                sucecss:false,
                message:"access denied not an admin user"
            })
        }
        
        const admin = await User.findOne({email})
        // console.log(admin)
        if(!admin || admin.userType !== "admin"){
            return res.json({
                status:404,
                sucecss:false,
                message:"invalid email or password"
            })
        }
        
        const isMatch = await bcrypt.compare(password,admin.password)
        // console.log(isMatch)
        if(!isMatch){
            return res.json({
                status:404,
                success:false,
                message:"password is not correct"
            })
        }
        
        
        // create token 
        
        const token = jwt.sign(
            {id:admin._id,userType:admin.userType,email:admin.email},
            process.env.SECRET_KEY,
            {expiresIn:"1d"}
        )
        // console.log(token)
        return res.json({
            status:200,
            success:true,
            message:"login successfully",
            token,
            admin,
            userType,
            
        })
        
    }catch(err){
        res.json({
            status:500,
            sucecss:false,
            message:"internal server error",
            error:err.message
        })
    }
}
module.exports = {seedAdmin,loginAdmin}