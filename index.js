const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { ProfileRouter } = require("./routes/profile.routes")
require("dotenv").config()


const app = express()
app.use(express.json())
app.use(cors())
app.use("/profile", ProfileRouter)


app.get("/", (req,res)=> {
    res.send("server is running")
})

const port = process.env.PORT
app.listen(port, async()=> {
    try {
        await connection
        console.log("data base is connected");
       console.log("server is running") 
    } catch (error) {
     console.log(error.message);   
    }
})



