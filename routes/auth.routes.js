import express from 'express';
import { register, login, sendForgotPasswordOtp,
  verifyOtp,
  resetPassword } from '../controllers/auth.controller.js';
import validate from '../middleware/validate.js';
import { registerSchema, loginSchema } from '../validations/auth.validation.js';

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/forgot-password', sendForgotPasswordOtp);
router.post('/verify-otp', verifyOtp);
router.post('/reset-password', resetPassword);
export default router;
