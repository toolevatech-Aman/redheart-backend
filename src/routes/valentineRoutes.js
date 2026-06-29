import express from "express";
import {
  createValentinePage,
  getValentinePage,
  trackView,
  recordResponse,
} from "../controllers/valentineController.js";

const router = express.Router();

router.post("/",              createValentinePage);
router.get("/:slug",          getValentinePage);
router.patch("/:slug/view",   trackView);
router.post("/:slug/respond", recordResponse);

export default router;
