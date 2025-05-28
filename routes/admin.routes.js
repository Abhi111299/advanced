import express from 'express';
import { registerByAdmin } from '../controllers/admin.controller.js';
import { registerSchema } from '../validations/auth.validation.js';
import validate from '../middleware/validate.js';
import { authenticate } from '../middleware/auth.middleware.js'

const router = express.Router();

router.post('/admin/register', authenticate, validate(registerSchema), registerByAdmin);

export default router;