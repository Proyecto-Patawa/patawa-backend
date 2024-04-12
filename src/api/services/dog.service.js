import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const dogService = {
  createDog: async (dogData) => {
    return await prisma.dog.create({
      data: dogData,
    });
  },

  getAllDogs: async () => {
    return await prisma.dog.findMany({});
  },

  getDogById: async (id) => {
    return await prisma.dog.findUnique({
      where: { dogId: id },
    });
  },

  updateDog: async (id, dogData) => {
    return await prisma.dog.update({
      where: { dogId: id },
      data: dogData,
    });
  },

  deleteDog: async (id) => {
    return await prisma.dog.delete({
      where: { dogId: id },
    });
  },
};
