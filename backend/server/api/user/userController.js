const User = require("./userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const addUser = async(req,res) =>{
    try{
        const validation = []
        const {name,email,password,phone,address,userType} = req.body

        if(!name || typeof name !== "string"){
            validation.push("name is required and type must be string")
        }

        if(!email || typeof email !=="string"){
            validation.push("email is required and type must be string")
        }
        if(!password || typeof password !== "string"){
            validation.push("password is required and type must be string")
        }
        if(!phone || typeof phone !== "string"){
            validation.push("phone is required and type must be string")
        }
        if(!address || typeof address !== "string"){
            validation.push("address is required and must be string")
        }
        if(!userType || typeof userType !== "string"){
            validation.push("userType is required and type must be string")
        }
        if (!["renter","hirer"].includes(userType)){
            validation.push("invalid user")
        }

        if(validation.length >0){
            return res.json({
                status:400,
                success:false,
                validation:"validation error",
                error:validation
            })
        }

        //check existing user 
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.json({
                status:403,
                success:false,
                message:"user is already exist"
            })
        }

        // hashed password

        const hashedPassword = await bcrypt.hash(password,10)
        
        const user = new User({
            name,
            email,
            password:hashedPassword,
            phone,
            address,
            userType
        })

        await user.save()

        res.json({
            status:201,
            success:true,
            message:"user is created successfully",
            data:user
        })

    }catch(err){
        res.json({
            status:500,
            success:false,
            message:"internal server error",
            error:err.message
        })

    }
}

const getAllUser = async(req,res) =>{
    try{

        const user = await User.find()
        res.json({
            status:200,
            success:true,
            message:"user is fetch successfully",
            data:user
        })

    }catch(err){
        res.json({
            status:500,
            success:false,
            message:"internal server error",
            error:err.message
        })

    }
}

const getUserById = async(req,res) =>{
    try{
        const {id} = req.body 
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        const user = await User.findById(id)
        if(!user){
            return res.json({
                status:403,
                success:false,
                messsage:"id is not valid or db is empty"
            })
        }

        res.json({
            status:200,
            success:true,
            message:"user is get successfuly",
            data:user
        })

    }catch(err){
        res.json({
            status:500,
            success:false,
            message:"internal server error",
            error:err.message
        })
    }
}


const updateUserById = async(req,res) =>{
    try{
        const{id,...data} = req.body
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        const user = await User.findByIdAndUpdate(
            id,
            data,
            {new:true}
        )
        if(!user){
            return res.json({
                status:403,
                success:false,
                message:"id is not found"
            })
        }

        res.json({
            status:200,
            success:true,
            message:"user is update successfully",
            data:user
        })

    }catch(err){
        res.json({
            status:500,
            success:false,
            message:"internal server error",
            error:err.message
        })
    }
}

const deleteUser = async(req,res) =>{
    try{

        const {id} = req.body 
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        const user = await User.findByIdAndDelete(id)
        if(!user){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        res.json({
            status:200,
            success:true,
            message:"user delete successfully"
        })
        

    }catch(err){
        res.json({
            status:500,
            success:false,
            message:"internal server error",
            error:err.message
        })
    }
}

const loginUser = async(req,res) =>{
    try{
        const validation = []
        const {email,password,userType}  = req.body 
        console.log(email)
        console.log(password)
        console.log(userType)
        if(!email){
            validation.push("email is required")
        }
        if(!password){
            validation.push("password is required")
        }
        if(!userType){
            validation.push("user type is required")
        }

        if(validation >0 ){
            return res.json({
                status:400,
                success:false,
                message:"validation error",
                error:validation
            })
        }

        const user = await User.findOne({email})
        console.log(user)
        
        if(!user){
            return res.json({
                status:403,
                sucecss:false,
                message:"user is not found"
            })
        }

        if(user.userType !== userType){
            return res.json({
                status:403,
                success:false,
                message:"user is not match"

            })
        }

        const isMatch = await bcrypt.compare(password,user.password)
        console.log(isMatch)
        if(!isMatch){
            return res.json({
                status:403,
                success:false,
                message:"password is not correct "
            })
        }

        // generate a token
        const token = jwt.sign(
            {id:user._id,userType:user.userType},
            process.env.SECRET_KEY,
            {expiresIn:"1d"}

        )
     console.log(token)
        res.json({
            status:200,
            success:true,
            message:"token",
            token,
            user:{
                id:user._id,
                userType:user.userType,
                email:user.email
            }
        })




    }catch(err){
       res.json({
        status:500,
        success:false,
        message:"internal server error",
        error:err.message
       })
    }
}

module.exports = {addUser,getAllUser,getUserById,updateUserById,deleteUser,loginUser}