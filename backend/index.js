const express = require("express")
const path = require("path")
const app = express()
const db = require("./server/config/db")
const {seedAdmin} = require("./server/config/seed")
const router = require("./server/routes/route")
const cors = require("cors")
db()
seedAdmin()

app.use('/uploads', express.static(path.join(__dirname, 'server/public/uploads')));
require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",router)

const port  = process.env.PORT || 5005 

app.listen(port,()=>{
    console.log(`server is running at port number http://localhost:${port}`)
})
