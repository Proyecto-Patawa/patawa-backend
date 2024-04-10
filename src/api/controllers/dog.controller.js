import { dogService } from "../services/dog.service.js";
export const dogController = {
  getAllDogs: (req, res) => {
    try {
      const dogs = dogService.getAllDogs();
      res.status(200).send(dogs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
