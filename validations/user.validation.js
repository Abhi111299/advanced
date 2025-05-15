import prisma from '../config/prisma.js';
import ApiError from '../utils/apiError.js';
import { comparePassword } from '../utils/hash.js';
import { findUserByEmailWithPassword } from '../repositories/user.repository.js';


export const validateUserRegistration = async ({ email }) => {
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) {
    throw new ApiError(422, 'Email already exists');
  }
};

export const validateUserLogin = async ({ email, password }) => {
    const user = await findUserByEmailWithPassword(email);
    if (!user) {
      throw new ApiError(422, 'User not found');
    }

    const match = await comparePassword(password, user.password);
    if (!match) throw new ApiError(422, 'User not found');

    const { password: _, ...sanitizedUser } = user;
    return sanitizedUser;
};
