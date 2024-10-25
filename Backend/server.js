import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/songRoute.js";
import connectDB from "./config/mongoDb.js";
import connectCloudinary from "./config/cloudinary.js";
dotenv.config()

//app config
const app=express();
const port=process.env.PORT || 3000;

connectDB(); //to connect the mongodb4
connectCloudinary(); //to connect the cloudinary

//middleware
app.use(express.json());
app.use(express.urlencoded()); 
app.use(cors());

//import routes
app.use("/api/song",router)

//initializing routes
app.get("/",(req, res)=>{
    res.send("API Woking")
})

app.listen(port,()=>{
    console.log(`Server is running on the PORT ${port}`)
})
