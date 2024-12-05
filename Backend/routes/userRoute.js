import {Router} from "express";
import errorHandler from "../services/catchAsyncError.js";
import { deleteUser, fetchAllUser, fetchSingleUser, login, profile, register, updateUser } from "../controllers/userController.js";
import { isAuthenticated, restrictTo } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";
const router=Router();

// User register
router.route("/register").post(upload.fields([{name:'image',maxCount:1}]),(req, res, next) => {
    req.body.role = "user"; 
    next();
}, register);


//artist register
router.route("/artist/register").post(upload.fields([{name:'image',maxCount:1}]),(req, res, next) => {
    req.body.role = "artist"; 
    next();
}, register);


router.route("/login").post(login)
router.route("/profile").get(isAuthenticated,profile)
router.route("/").get(errorHandler(fetchAllUser))
router.route("/:id").get(errorHandler(fetchSingleUser))
.delete(errorHandler(deleteUser))

.patch(upload.fields([{ name: 'image', maxCount: 1 }]), errorHandler(updateUser)); 

export default router