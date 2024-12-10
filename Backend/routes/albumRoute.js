import { Router } from "express";
import { addAlbum, deleteAlbum, fetchSingleAlbum, getAllAlbum, updateAlbum } from "../controllers/albumController.js";
import errorHandler from "../services/catchAsyncError.js";
import upload from "../middleware/multer.js"
const router=Router();

router.route("/").post(upload.single('image'),addAlbum)
.get(errorHandler(getAllAlbum))

router.route("/:id").get(errorHandler(fetchSingleAlbum))
.delete(errorHandler(deleteAlbum))
.patch(upload.single('image'),updateAlbum)


export default router