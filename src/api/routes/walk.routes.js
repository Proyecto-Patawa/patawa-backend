import express from "express";
import { walkController } from "../controllers/walk.controller.js";
import { walkService } from "../services/walk.service.js";

const router = express.Router();

router.get("/", walkController.getAllWalks);
router.post("/", walkController.createWalk);
router.get("/:id", walkController.getWalkById);
router.put("/:id", walkController.updateWalk);
router.delete("/:id", walkController.deleteWalk);
router.post("/details", walkController.createWalkDetail);
router.get("/details", walkController.getAllWalksDetails);

export default router;
