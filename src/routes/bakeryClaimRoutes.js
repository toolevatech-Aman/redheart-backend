import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import { rateLimit } from "../middlewares/rateLimitMiddleware.js";
import { createClaim, getAllClaims, updateClaim } from "../controllers/bakeryClaimController.js";

const router = express.Router();
const isOverallAdmin = checkAccess("overall");

router.post("/", rateLimit({ windowMs: 3600_000, max: 5, message: "Too many requests. Please try again later." }), createClaim); // public — bakery owners submit a claim
router.get("/", auth, isOverallAdmin, getAllClaims);
router.patch("/:id", auth, isOverallAdmin, updateClaim);

export default router;
