import {Router} from "express";
import errorHandler from "../services/catchAsyncError.js";
import { deleteUser, fetchAllUser, fetchSingleUser, login, profile, register, updateUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";
const router=Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/profile").get(isAuthenticated,profile)
router.route("/").get(errorHandler(fetchAllUser))
router.route("/:id").get(errorHandler(fetchSingleUser))
.delete(errorHandler(deleteUser))

.patch(errorHandler(updateUser))
export default router