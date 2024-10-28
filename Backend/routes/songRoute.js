import {Router} from "express"
import { addSong, deleteSong, fetchSingleSong, getAllSong } from "../controllers/songController.js";
import upload from "../middleware/multer.js";
import errorHandler from "../services/catchAsyncError.js";

const router=Router();

router.route("/").post(upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]),addSong)
.get(errorHandler(getAllSong))

router.route("/:id").get(errorHandler((fetchSingleSong)))
.delete(errorHandler(deleteSong))
// .patch(errorHandler(updateSong))


export default router