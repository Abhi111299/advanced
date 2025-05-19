// repositories/user.repository.js // adjust path as needed
import prisma from '../config/prisma.js';


export const findUserByEmailWithPassword = async (email, role) => {
  return prisma.user.findUnique({
    where: { email, role }
  });
};
