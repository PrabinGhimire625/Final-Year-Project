import mongoose from "mongoose";

const connectDB=async()=>{
    mongoose.connection.on('connected',()=>{
        console.log("Connect to the mongodb server")

    })
    await mongoose.connect(`${process.env.MONGODB_URL}/TuneCasa`)

}

export default connectDB