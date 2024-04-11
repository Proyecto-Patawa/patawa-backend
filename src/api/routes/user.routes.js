import express from "express";
import { userController } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/role/:roleName", userController.getUsersByRole);
router.post("/detail", userController.createUserWithDetails);

export default router;
