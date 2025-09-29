
const express = require("express");
const cors = require("cors")
require("dotenv").config()

const applyNowRoutes = require("./routes/applyNowRoutes")

const contactRoutes = require("./routes/contactRoutes")

const app = express();

// middalware
app.use(cors())
app.use(express.json())

app.use("/api",applyNowRoutes)
app.use("/api",contactRoutes)


// PORT env se uthana
const PORT = process.env.PORT ||5000;

// server port
app.listen(PORT,(req,res)=>{
    console.log("✅ Server running on port http://localhost:5000")
})


