import prisma from '../config/prisma.js';
import { hashPassword } from '../utils/hash.js';
import * as AuthToken from '../utils/authToken.js'
import { v4 as uuidv4 } from 'uuid';
import ApiError from '../utils/apiError.js';
import { validateUserRegistration, validateUserLogin } from '../validations/user.validation.js';
import crypto from 'crypto';
import { sendEmail } from '../utils/email.js';

export const registerUser = async ({ username, password, email, gender, age, location, role }) => {
  await validateUserRegistration({ email });

  const hashed = await hashPassword(password);
  const user = await prisma.user.create({ data: { username, email, gender, age, location, password: hashed, role } });
  return { userId: user.id };
};

export const loginUser = async ({ email, password, role }) => {
  const user = await validateUserLogin({ email , password, role});
  const accessToken = AuthToken.generateAccessToken(user.id, user.role);
  const refreshToken = AuthToken.generateRefreshToken(user.id, user.role);
  return { user, accessToken, refreshToken };
};

export const handleSendOtp = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new ApiError(400, 'Email not registered');

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

  await prisma.user.update({
    where: { email },
    data: { otp, otpExpiry },
  });

  await sendEmail(email, 'Your OTP', `Your OTP is: ${otp}`);
  return { message: 'OTP sent to email' };
};

export const handleVerifyOtpAndGenerateUUID = async (email, otp) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || user.otp !== otp || user.otpExpiry < new Date()) {
    throw new ApiError(400, 'Invalid or expired OTP');
  }

  const resetUUID = uuidv4();
  const resetUUIDExpiry = new Date(Date.now() + 15 * 60 * 1000);

  await prisma.user.update({
    where: { email },
    data: {
      resetUUID,
      resetUUIDExpiry,
      otp: null,
      otpExpiry: null,
    },
  });

  return { resetUUID };
};

export const handlePasswordReset = async (uuid, password, confirmPassword) => {
  if (password !== confirmPassword) {
    throw new ApiError(400, 'Passwords do not match');
  }

  const user = await prisma.user.findFirst({
    where: {
      resetUUID: uuid,
      resetUUIDExpiry: { gte: new Date() },
    },
  });

  if (!user) throw new ApiError(400, 'Invalid or expired reset UUID');

  const hashedPassword = await hashPassword(password);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      resetUUID: null,
      resetUUIDExpiry: null,
    },
  });

  return { message: 'Password has been reset successfully' };
};
