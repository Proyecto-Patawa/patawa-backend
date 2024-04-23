import { PrismaClient } from "@prisma/client";
import { userSelectData } from "../utils/user.utils.js";
const prisma = new PrismaClient();

export const userService = {
  createUser: async (userData, rolesData) => {
    return await prisma.user.create({
      data: {
        ...userData,
        UserRoles: {
          create: rolesData.map((roleId) => ({
            Role: { connect: { roleId } },
          })),
        },
      },
    });
  },

  getAllUsers: async () => {
    return await prisma.user.findMany({
      select: userSelectData(),
    });
  },

  getUserById: async (id) => {
    return await prisma.user.findUnique({
      select: userSelectData(),
      where: { userId: id },
    });
  },

  updateUser: async (id, userData) => {
    return await prisma.user.update({
      where: { userId: id },
      data: userData,
    });
  },

  deleteUser: async (id) => {
    return await prisma.user.delete({
      where: { userId: id },
    });
  },

  getUsersByRole: async (roleName) => {
    return await prisma.user.findMany({
      where: {
        UserRoles: {
          some: {
            Role: {
              roleName,
            },
          },
        },
      },
      select: userSelectData(),
    });
  },

  createUserWithDetails: async (
    userData,
    addressesData,
    phonesData,
    rolesData
  ) => {
    const user = await prisma.user.create({
      data: {
        ...userData,
        Addresses: {
          // Asegúrate de usar el nombre exacto del campo definido en tu modelo Prisma
          create: addressesData, // 'addressesData' es un array de objetos de direcciones
        },
        Phones: {
          // Asegúrate de usar el nombre exacto del campo definido en tu modelo Prisma
          create: phonesData, // 'phonesData' es un array de objetos de teléfonos
        },
        UserRoles: {
          // Aquí es donde necesitas ajustar para usar la tabla intermedia 'UserRole'
          create: rolesData.map((role) => ({
            Role: {
              connect: { roleId: role.roleId },
            },
          })),
        },
      },

      select: userSelectData(),
    });
    return user;
  },
};
