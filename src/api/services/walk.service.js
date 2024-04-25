import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const walkService = {
  createWalk: async (walkData) => {
    return await prisma.walk.create({
      data: walkData,
    });
  },

  getAllWalks: async () => {
    return await prisma.walk.findMany({});
  },

  getWalkById: async (id) => {
    return await prisma.walk.findUnique({
      where: { walkId: id },
    });
  },

  updateWalk: async (id, walkData) => {
    return await prisma.walk.update({
      where: { walkId: id },
      data: walkData,
    });
  },

  deleteWalk: async (id) => {
    return await prisma.walk.delete({
      where: { walkId: id },
    });
  },

  createWalkDetail: async (walkDetailData) => {
    return await prisma.walkDetail.create({
      data: walkDetailData,
    });
  },

  getAllWalksDetails: async (walkId) => {
    return await prisma.walkDetail.findMany({
      where: {
        walkId: walkId,
      },
    });
  },

  updateWalkDetail: async (walkId, dogId, walkDetailData) => {
    return await prisma.walkDetail.update({
      where: {
        walk_detail_id: { walkId: parseInt(walkId), dogId: parseInt(dogId) },
      },
      data: walkDetailData,
    });
  },
};
