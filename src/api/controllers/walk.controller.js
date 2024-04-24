import { walkService } from "../services/walk.service.js";

export const walkController = {
  getAllWalks: async (req, res) => {
    try {
      const walks = await walkService.getAllWalks();
      res.status(200).json(walks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createWalk: async (req, res) => {
    try {
      const walk = await walkService.createWalk(req.body);
      res.status(201).json(walk);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getWalkById: async (req, res) => {
    try {
      const walk = await walkService.getWalkById(parseInt(req.params.id));
      if (walk) {
        res.status(200).json(walk);
      } else {
        res.status(404).json({ message: "Walk not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateWalk: async (req, res) => {
    try {
      const walk = await walkService.updateWalk(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json(walk);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteWalk: async (req, res) => {
    try {
      await walkService.deleteWalk(parseInt(req.params.id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createWalkDetail: async (req, res) => {
    try {
      const walkDetail = await walkService.createWalkDetail(req.body);
      res.status(201).json(walkDetail);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllWalksDetails: async (req, res) => {
    try {
      const walkId = parseInt(req.params.walkId);
      const walksDetails = await walkService.getAllWalksDetails(walkId);
      res.status(200).json(walksDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
