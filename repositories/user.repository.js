// repositories/user.repository.js // adjust path as needed
import prisma from '../config/prisma.js';


export const findUserByEmailWithPassword = async (email) => {
  return prisma.user.findUnique({
    where: { email }
  });
};
