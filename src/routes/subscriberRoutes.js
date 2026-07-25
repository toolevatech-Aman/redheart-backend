import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { getAllSubscribers, createSubscriber } from "../controllers/subscriberController.js";

const router = express.Router();

router.get("/",  auth, isAdmin, getAllSubscribers);
router.post("/", createSubscriber); // public — anyone can subscribe

export default router;
