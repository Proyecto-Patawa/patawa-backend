import { userService } from "../services/user.service.js";
export const userController = {
  getAllUsers: (req, res) => {
    try {
      const users = userService.getAllUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
