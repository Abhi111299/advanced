import express from 'express';
import { register, registerByAdmin, login, sendForgotPasswordOtp,
  verifyOtp,
  resetPassword } from '../controllers/auth.controller.js';
// import { createCategory } from '../controllers/category.controller.js';
import validate from '../middleware/validate.js';
import { registerSchema, loginSchema } from '../validations/auth.validation.js';
// import { categorySchema } from '../validations/category.validation.js';
import { authenticate } from '../middleware/auth.middleware.js'

const router = express.Router();
// Public Registration Api
router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/forgot-password', sendForgotPasswordOtp);
router.post('/verify-otp', verifyOtp);
router.post('/reset-password', resetPassword);

// Protected Registration Api
router.post('/admin/register', authenticate, validate(registerSchema), registerByAdmin);
// router.post('/admin/category', authenticate, validate(categorySchema), createCategory);
export default router;
