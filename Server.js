require("dotenv").config()
const express = require("express");
const cors = require("cors")


const app = express();

// middleware
// app.use(core())
// app.use(express.json())


// PORT env se uthana
const PORT = process.env.PORT ||3000;

// server port
app.listen(PORT,(req,res)=>{
    console.log("✅ Server running on port http://localhost:5000")
})


