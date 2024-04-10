import express from "express";
import { dogController } from "../controllers/dog.controller.js";
const router = express.Router();

router.get("/", dogController.getAllDogs);

export default router;
