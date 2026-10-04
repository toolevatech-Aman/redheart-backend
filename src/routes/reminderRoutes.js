import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import {
  listMyReminders, createReminder, updateReminder, deleteReminder, listAllReminders,
} from "../controllers/reminderController.js";

const router = express.Router();
const isOverallAdmin = checkAccess("overall");

// Admin — every customer's reminders. Before /:id-shaped routes so "admin"
// never gets parsed as a reminder id.
router.get("/admin/all", authMiddleware, isOverallAdmin, listAllReminders);

// Customer — their own data only.
router.get("/",       authMiddleware, listMyReminders);
router.post("/",      authMiddleware, createReminder);
router.put("/:id",    authMiddleware, updateReminder);
router.delete("/:id", authMiddleware, deleteReminder);

export default router;
