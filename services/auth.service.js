import prisma from '../config/prisma.js';
import { hashPassword } from '../utils/hash.js';
import jwt from 'jsonwebtoken';
import ApiError from '../utils/apiError.js';
import { validateUserRegistration, validateUserLogin } from '../validations/user.validation.js';

export const registerUser = async ({ username, password, email, gender, age, location }) => {
  await validateUserRegistration({ email });

  const hashed = await hashPassword(password);
  const user = await prisma.user.create({ data: { username, email, gender, age, location, password: hashed } });
  return { userId: user.id };
};

export const loginUser = async ({ email, password }) => {
  await validateUserLogin({ email , password});
  const user = await prisma.user.findUnique({ where: { email } });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token };
};
