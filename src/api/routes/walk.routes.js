import express from "express";
import { walkController } from "../controllers/walk.controller.js";

const router = express.Router();

router.post("/details", walkController.createWalkDetail);
router.get("/details/:walkId", walkController.getAllWalksDetails);
router.put("/details", walkController.updateWalkDetail);
router.get("/", walkController.getAllWalks);
router.post("/", walkController.createWalk);
router.get("/:id", walkController.getWalkById);
router.put("/:id", walkController.updateWalk);
router.delete("/:id", walkController.deleteWalk);

export default router;
