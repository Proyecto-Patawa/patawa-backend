import express from "express";
import { walkController } from "../controllers/walk.controller.js";
const router = express.Router();

router.get("/", walkController.getAllWalks);

export default router;
