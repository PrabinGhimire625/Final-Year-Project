import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";
import { response } from "express";

//add album
export const addAlbum = async (req, res) => {
    try{
        const { name, desc, bgColour } = req.body;
        const imageFile = req.file;
        if (!name || !desc || !bgColour) {
            return res.status(404).json({ message: "Please provide name, description, and background color." });
        }
        if (!imageFile) {
            return res.status(403).json({ message: "Please upload an image for the album." });
        }

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        if (!imageUpload) {
            return res.status(500).json({ message: "Failed to upload image." });
        }

        const albumData = {
            name,
            desc,
            bgColour,
            image: imageUpload.secure_url,
        };

        // Create the album in the database
        const album = await albumModel.create(albumData);
        if (!album) {
            return res.status(500).json({ message: "Failed to create album in the database." });
        }
        res.status(200).json({ message: "Album is successfully added!", data: album });
    }catch(err){
        res.status(500).json({ error: "Internal server error"});
    }
};

//get all album
export const getAllAlbum=async(req,res)=>{
    const allAlbums=await albumModel.find();
    if(allAlbums.length<1){
        return res.status(404).json({message:"Album not found"});   
    }
    res.status(200).json({message:"Successfully get all the album", data:allAlbums})
}

//get single album
export const fetchSingleAlbum=async(req,res)=>{
    const id=req.params.id;
    const singleAlbum=await albumModel.findById(id);
    if(!singleAlbum){
        return res.status(404).json({message:"Album not found"});   
    }
    res.status(200).json({message:"Successfully fetch the single album",data:singleAlbum});
}

//delete album
export const deleteAlbum=async(req,res)=>{
    const id=req.params.id;
    const deleteAlbum=await albumModel.findByIdAndDelete(id);
    if(!deleteAlbum){
        return res.status(404).json({message:"Album not found"});
    }
    res.status(200).json({message:"Successfully delete the album"})
}