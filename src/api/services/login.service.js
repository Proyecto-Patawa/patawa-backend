import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const loginService = {
  authenticateUser: async (email, password) => {
    const user = await prisma.user.findUnique({ where: { email } });

    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.password);

    if (!(user && passwordCorrect)) {
      return false;
    }

    delete user.password;
    const token = "prueba";

    return { user, token };
  },
};
