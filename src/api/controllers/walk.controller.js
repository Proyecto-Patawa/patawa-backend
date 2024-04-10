import { walkService } from "../services/walk.service.js";
export const walkController = {
  getAllWalks: (req, res) => {
    try {
      const walks = walkService.getAllWalks();
      res.status(200).send(walks);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
