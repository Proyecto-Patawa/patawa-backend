import express from "express";
import { walkController } from "../controllers/walk.controller.js";
import { walkService } from "../services/walk.service.js";

const router = express.Router();

router.post("/details", walkController.createWalkDetail);
router.get("/details", walkController.getAllWalksDetails);
router.get("/details/:id", walkController.getWalkDetailById);
router.put("/details/:id", walkController.updateWalkDetail);
router.delete("/details/:id", walkController.deleteWalkDetail);
router.get("/", walkController.getAllWalks);
router.post("/", walkController.createWalk);
router.get("/:id", walkController.getWalkById);
router.put("/:id", walkController.updateWalk);
router.delete("/:id", walkController.deleteWalk);

export default router;
