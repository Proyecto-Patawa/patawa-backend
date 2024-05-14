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

    const tokenUser = {
      userId: user.userId,
      email: user.email,
    };

    const token = jwt.sign(tokenUser, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 * 7,
    });

    return { user, token };
  },
};
