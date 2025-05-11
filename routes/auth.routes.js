import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import protect from '../middleware/auth.middleware.js';
import validate from '../middleware/validate.js';
import { registerSchema } from '../validations/auth.validation.js';

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', login);

// Example protected route
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'Welcome to protected profile', user: req.user });
});

export default router;
