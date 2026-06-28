import express from "express";
import {
  createValentinePage,
  getValentinePage,
  recordResponse,
} from "../controllers/valentineController.js";

const router = express.Router();

// Public — anyone can create or open a page
router.post("/",              createValentinePage);
router.get("/:slug",          getValentinePage);
router.post("/:slug/respond", recordResponse);

export default router;
