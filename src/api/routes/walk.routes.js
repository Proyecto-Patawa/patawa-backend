import express from "express";
import { walkController } from "../controllers/walk.controller.js";

const router = express.Router();

router.get("/", walkController.getAllWalks);
router.post("/", walkController.createWalk);
router.get("/:id", walkController.getWalkById);
router.get("/:id", walkController.updateWalk);
router.delete("/:id", walkController.deleteWalk);

export default router;
