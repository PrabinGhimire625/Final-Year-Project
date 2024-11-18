import User from "../models/userModel.js"
import jwt from "jsonwebtoken"

//to verify the user from the token
export const isAuthenticated=async(req, res, next)=>{
    const token=req.headers.authorization
    console.log(token)
    if(!token){
        return res.status(401).json({message : "Token is not found"})
    }
    //decoded will contain the payload (like: Id, username)
    jwt.verify(token, process.env.JWT_SECRET, async(err,decoded)=>{
        if(err){
            return res.status(403).json({message :"Invalid token"})
        }else{
            try{
                const userData=await User.findById(decoded.id);//userData will typically include all fields (like: id,username,email) 
                if(!userData){
                    return res.status(404).json({message:"No user with that token"}) 
                }
               req.user=userData  // Attach userData to req.user
               next() 
            }catch(err){
                console.log(err)
                res.status(500).json({message : "Something went wrong"})
            }
        }
    })
}

//restrction based on the user/admin
//... is used in function to represent an indefinite number of arguments as an array. 
export const restrictTo = (...roles)=>{
    return (req,res,next)=>{
       const userRole = req.user.role
       if(!roles.includes(userRole)){
        res.status(403).json({
            message : "you don't have permission for this.forbidden"
        })
       }else{
        next()
       }
    }
}

