import { Router } from "express";
import { addAlbum, deleteAlbum, fetchSingleAlbum, getAllAlbum } from "../controllers/albumController.js";
import errorHandler from "../services/catchAsyncError.js";
import upload from "../middleware/multer.js"
const router=Router();

router.route("/").post(upload.single('image'),addAlbum)
.get(errorHandler(getAllAlbum))

router.route("/:id").get(errorHandler(fetchSingleAlbum))
.delete(errorHandler(deleteAlbum))

export default router