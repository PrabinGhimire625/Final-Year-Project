import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//register
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hanshPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hanshPassword });
    await newUser.save();
    res
      .status(200)
      .json({ message: "User registered successfully", data: newUser });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//login
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const payload = { id: user.id, username: user.username, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h",});
   // res.cookie("token", token);
    res.status(200).json({ message: "Login successful", token, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};


//Profile
export const profile = async (req, res) => {
  const id = req.user.id; 
  try {
    const profileData = await User.findById(id);
    if (profileData) {
      res.status(200).json({
        message: "Successfully fetched the user profile",
        data: profileData,
      });
    } else {
      res.status(404).json({ message: "Error fetching user profile", data: [] });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", errorMessage: err.message });
  }
};

//edit profile
// export const editProfile=async(req,res)=>{
//   const {username,password,image}=req.body

// }

//fetch all user
export const fetchAllUser=async(req,res)=>{
  const allUser=await User.find(); 
 if(allUser.length>0){
  res.status(200).json({message:"Successfully fetch all the users",data:allUser});
 }else{
  res.status(404).json({message:"User not found"});
 }
}

//fetch single user
export const fetchSingleUser=async(req, res)=>{
  const id=req.params.id;
  const singleUser=await User.findById(id);
  if(singleUser){
    res.status(200).json({message:"Successfully fetch single users",data:singleUser});
  }else{
    res.status(404).json({message:"User not found"});
   }
}

//delete user
export const deleteUser=async(req,res)=>{
  const {id}=req.params;
  const user=await User.findByIdAndDelete(id);
  if(user){
    res.status(200).json({message:"Successfully delete the users",data:user});
  }else{
    res.status(404).json({message:"User not found"});
  }
}

//update user
export const updateUser=async(req,res)=>{
  const {id}=req.params;
  const {username,email}=req.body;
  const user=await User.findByIdAndUpdate(id,{username,email},{ new: true, runValidators: true });
  if(user){
    res.status(200).json({message:"Successfully update the users data",data:user});
  }else{
    res.status(404).json({message:"User not found"});
  }
}
