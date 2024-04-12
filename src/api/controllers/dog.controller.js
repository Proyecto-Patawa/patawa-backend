import { dogService } from "../services/dog.service.js";

export const dogController = {
  getAllDogs: async (req, res) => {
    try {
      const dogs = await dogService.getAllDogs();
      res.status(200).json(dogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createDog: async (req, res) => {
    try {
      const { dogData } = req.body;
      const dog = await dogService.createDog(dogData);
      res.status(201).json(dog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getDogById: async (req, res) => {
    try {
      const dog = await dogService.getDogById(parseInt(req.params.id));
      if (dog) {
        res.status(200).json(dog);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateDog: async (req, res) => {
    try {
      const dog = await dogService.updateDog(parseInt(req.params.id), req.body);
      res.status(200).json(dog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deleteDog: async (req, res) => {
    try {
      await dogService.deleteDog(parseInt(req.params.id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
