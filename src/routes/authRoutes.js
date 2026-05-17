import express from "express";
import { sendOtp, verifyOtp, googleAuth, emailSendOtp, emailVerifyOtp } from "../controllers/authController.js";

const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/google", googleAuth);
router.post("/email/send-otp", emailSendOtp);
router.post("/email/verify-otp", emailVerifyOtp);

export default router;
