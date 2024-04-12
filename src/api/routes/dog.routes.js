import express from "express";
import { dogController } from "../controllers/dog.controller.js";

const router = express.Router();

router.get("/", dogController.getAllDogs);
router.post("/", dogController.createDog);
router.get("/:id", dogController.getDogById);
router.put("/:id", dogController.updateDog);
router.delete("/:id", dogController.deleteDog);

export default router;
