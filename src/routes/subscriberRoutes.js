import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import { getAllSubscribers, createSubscriber } from "../controllers/subscriberController.js";

const router = express.Router();

router.get("/",  auth, checkAccess("overall"), getAllSubscribers);
router.post("/", createSubscriber); // public — anyone can subscribe

export default router;
