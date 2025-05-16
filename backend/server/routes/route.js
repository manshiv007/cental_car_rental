const express = require("express")
const router = express.Router()
const upload = require("../middleware/multer")

const {addUser,getAllUser,getUserById,updateUserById,deleteUser,loginUser,} = require("../api/user/userController")
const {loginAdmin} = require("../config/seed")
const {addBrand,getAllBrand,getBrandById,updateBrandById,deleteBrand,} = require("../api/brand/brandController")
const {addCar,getCars,getCarById,updateCar,deleteCar,} = require("../api/car/carController")
const {registerRenter,loginRenter,getAllRenter,} = require("../api/renter/renterController")

const {registerHirer,loginHirer,getAllHirers,changePassword,} = require("../api/hirer/hirerController")
const {createBooking,getAllBooking,getBookingById,deleteBooking,updateBookingStatus} = require("../api/booking/bookingController")


// const {sendOtp,verifyOtp,addUser} = require("../api/user/userController")

router.post("/loginadmin",loginAdmin)
router.post("/login",loginUser)
router.post("/adduser",addUser)
router.post("/getalluser",getAllUser)
router.post("/getuserbyid",getUserById)
router.post("/u",updateUserById)
router.post("/deleteuser",deleteUser)

router.post("/addbrand",addBrand)
router.post("/getallbrand",getAllBrand)
router.post("/getbrandbyid",getBrandById)
router.post("/updatebrandbyid",updateBrandById)
router.post("/deletebrand",deleteBrand)

router.post( "/addcar",upload.single("image"),addCar)
router.post("/getcars",getCars)
router.post(  "/getcarbyid",getCarById)
router.post("/updatecar",updateCar)
router.post( "/deletecar",deleteCar)

router.post("/registerrenter",registerRenter)
router.post("/loginrenter",loginRenter)
router.post("/getallrenter",getAllRenter)

router.post("/registerHirer",registerHirer)
router.post("/loginHirer",loginHirer)
router.post("/getallhirers", getAllHirers);
router.post("/changepassword",changePassword);

router.post("/createbooking", createBooking)
router.post("/getallbooking",getAllBooking)
router.post("/getbookingbyid",getBookingById)
router.post("/deletebooking",deleteBooking)
router.post("/updatebookingstatus",updateBookingStatus)


// router.post("/sendotp",sendOtp)
// router.post("/verifyotp",verifyOtp)
// router.post("/adduser",addUser)








module.exports = router

