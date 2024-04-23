import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const walkDetailService = {
  createwalkDetail: async (walkDetailData) => {
    return await prisma.walkDetail.create({
      data: walkDetailData,
    });
  },
};
