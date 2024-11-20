import {Router} from "express";
import errorHandler from "../services/catchAsyncError.js";
import { deleteUser, fetchAllUser, fetchSingleUser, login, profile, register, updateUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";
const router=Router();

router.route("/register").post(upload.fields([{name:'image',maxCount:1}]),register)
router.route("/login").post(login)
router.route("/profile").get(isAuthenticated,profile)
router.route("/").get(errorHandler(fetchAllUser))
router.route("/:id").get(errorHandler(fetchSingleUser))
.delete(errorHandler(deleteUser))

.patch(upload.fields([{ name: 'image', maxCount: 1 }]), errorHandler(updateUser)); 

export default router