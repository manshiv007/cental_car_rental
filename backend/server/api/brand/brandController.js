const Brand = require("./brandModel.js")
// const bcrypt = require("bcryptjs")

require("dotenv").config()

const addBrand = async(req,res) =>{
    try{
        const validation = []
        const {name,description} = req.body

        if(!name || typeof name !== "string"){
            validation.push("name is required and type must be string")
        }
        if(!description || typeof description !== "string"){
            validation.push("description is required and type must be string")
        }
        if(validation.length >0){
            return res.json({
                status:400,
                success:false,
                validation:"validation error",
                error:validation
            })
        }

        //check existing brand 
        const brand = new Brand({
            name,
            description
        })

      

        await brand.save()

        res.json({
            status:201,
            success:true,
            message:"brand is created successfully",
            data:brand
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

const getAllBrand = async(req,res) =>{
    try{

        const brand = await Brand.find()
        res.json({
            status:200,
            success:true,
            message:"brand is fetch successfully",
            data:brand
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

const getBrandById = async(req,res) =>{
    try{
        const {id} = req.body 
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        const brand = await Brand.findById(id)
        if(!brand){
            return res.json({
                status:403,
                success:false,
                messsage:"id is not valid or db is empty"
            })
        }

        res.json({
            status:200,
            success:true,
            message:"brand is get successfuly",
            data:brand
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

const updateBrandById = async(req,res) =>{
    try{
        const{id,...data} = req.body
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        const brand = await Brand.findByIdAndUpdate(
            id,
            data,
            {new:true}
        )
        if(!brand){
            return res.json({
                status:403,
                success:false,
                message:"id is not found"
            })
        }

        res.json({
            status:200,
            success:true,
            message:"brand is update successfully",
            data:brand
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

const deleteBrand = async(req,res) =>{
    try{

        const {id} = req.body 
        if(!id){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        const brand = await Brand.findByIdAndDelete(id)
        if(!brand){
            return res.json({
                status:400,
                success:false,
                message:"id is required"
            })
        }

        res.json({
            status:200,
            success:true,
            message:"brand delete successfully"
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


        // if(validation >0 ){
        //     return res.json({
        //         status:400,
        //         success:false,
        //         message:"validation error",
        //         error:validation
        //     })
        // }

        // const brand = await Brand.findOne({email})
        // console.log(brand)
        
        // if(!brand){
        //     return res.json({
        //         status:403,
        //         sucecss:false,
        //         message:"brand is not found"
        //     })
        // }

        
        
       
     

module.exports = {addBrand,getAllBrand,getBrandById,updateBrandById,deleteBrand}



