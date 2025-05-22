import { Router } from "express";
import { registerUser, verifyOTP, resendOTP, loginUser, logoutUser , getCurrentUser } from "../controllers/user.controller.js" ;
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router= Router();

router.route("/register").post(registerUser);
router.route("/verify-otp").post(verifyOTP);
router.route("/resend-otp").post(resendOTP);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT,  logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser)

export default router;