const Car = require("./carModel");
const fs = require("fs");
const path = require("path");
// const Brand = require("../brand/brandModel");
// const upload = require("../../middleware/multer");


const addCar = async (req, res) => {
  try {
    const { name, description, brandId, price } = req.body;
    const image = req.file?.filename;

    if (!image) {
      return res.json({
        status: 400,
        message: "Image is required",
        error: "Image is required",
      });
    }

    if (!name || !description || !brandId || !price || !req.file) {
      return res.json({
        success: false,
        status: 400,
        message: "All fields (name, description, brandId, price, image) are required",
      });
    }

    const newCar = new Car({
      name,
      description,
      brandId,
      image,
      price, 
    });

    await newCar.save();
    return res.json({
      status: 201,
      success: true,
      message: "Car successfully created",
      data: newCar,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// Get All Cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find().populate("brandId");
    res.json({
      status: 200,
      success: true,
      message: "All cars with brand details",
      cars,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// Get Car by ID
const getCarById = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.json({
        status: 400,
        success: false,
        message: "Car ID is required",
      });
    }

    const car = await Car.findById(id).populate('brandId');
    if (!car) {
      return res.json({
        status: 404,
        success: false,
        message: "Car not found",
      });
    }

    res.json({
      status: 200,
      success: true,
      car,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// Update Car
const updateCar = async (req, res) => {
  try {
    const { id, name, brandId, description, price } = req.body;

    if (!id) {
      return res.json({
        status: 400,
        success: false,
        message: "Car ID is required",
      });
    }

    const updatedCar = await Car.findByIdAndUpdate(
        id,
        { name, brandId, description, price },
        { new: true }
      ).populate("brandId"); 

    if (!updatedCar) {
      return res.json({
        status: 404,
        success: false,
        message: "Car not found",
      });
    }

    return res.json({
      status: 200,
      success: true,
      message: "Car updated successfully",
      car: updatedCar,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

// Delete Car
const deleteCar = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.json({
        status: 404,
        success: false,
        message: "Car ID is required",
      });
    }

    const car = await Car.findById(id)
    if(!car){
      return res.json({
        status:404,
        success:false,
        message:"car is not found"
      })
    }
    // find path of image 
     const imagePath = path.join(__dirname,"../../public/uploads",car.image)

     // delete the car from database
    const deletedCar = await Car.findByIdAndDelete(id);
    
    // delete the car image from server

    fs.unlink(imagePath,(err)=>{
      if(err){
        console.log("failed to delete image:",err.message)
      }else{
        console.log("image is delete successfuilly from server:",car.image)
      }
    })

    return res.json({
      status: 200,
      success: true,
      message: "Car deleted successfully",
      car: deletedCar,
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};
// const deleteCar = async (req, res) => {
//   try {
//     const { carId } = req.body;
//     const car = await Car.findById(carId);
//     if (!car) {
//       return res.status(404).json({ success: false, message: "Car not found" });
//     }

//     // Delete the image file
//     const imagePath = path.join(__dirname, "../../uploads", car.image);
//     fs.unlink(imagePath, (err) => {
//       if (err) {
//         console.error("Failed to delete image file:", err.message);
//         // Not returning here, continue to delete from DB
//       }
//     });

//     // Delete the car record from database
//     await Car.findByIdAndDelete(carId);

//     res.json({ success: true, message: "Car deleted successfully" });
//   } catch (err) {
//     console.error("Delete error:", err.message);
//     res.status(500).json({ success: false, message: "Error deleting car" });
//   }
// };

module.exports = {
  addCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
};