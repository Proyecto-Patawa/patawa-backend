import { PrismaClient } from "@prisma/client";
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
    return await prisma.user.findMany({});
  },

  getUserById: async (id) => {
    return await prisma.user.findUnique({
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
      include: {
        UserRoles: {
          include: {
            Role: true,
          },
        },
      },
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
        addresses: {
          create: addressesData, // ⁠ addressesData ⁠ es un array de objetos de direcciones
        },
        phones: {
          create: phonesData, // ⁠ phonesData ⁠ es un array de objetos de teléfonos
        },
        roles: {
          create: rolesData,
        },
      },
      include: {
        addresses: true,
        phones: true, // Asegúrate de que los nombres coincidan con los de tu modelo
        roles: true,
      },
    });
    return user;
  },
};
