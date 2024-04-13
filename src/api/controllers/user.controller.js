import { userService } from "../services/user.service.js";

export const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const { userData, rolesData } = req.body;
      const user = await userService.createUser(userData, rolesData);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await userService.getUserById(parseInt(req.params.id));
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await userService.updateUser(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await userService.deleteUser(parseInt(req.params.id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUsersByRole: async (req, res) => {
    try {
      const { roleName } = req.params;
      const users = await userService.getUsersByRole(roleName);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUserWithDetails: async (req, res) => {
    try {
      const { userData, addressesData, phonesData, roles } = req.body;
      const user = await userService.createUserWithDetails(
        userData,
        addressesData,
        phonesData,
        roles
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};