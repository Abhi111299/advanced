import express from 'express';
import { category, getAllCategory } from '../controllers/category.controller.js';
import { categorySchema } from '../validations/common.validation.js';
import validate from '../middleware/validate.js';
import { authenticate } from '../middleware/auth.middleware.js'


const router = express.Router();

router.post('/admin/category', authenticate, validate(categorySchema), category);
router.get('/admin/get_all_categories', authenticate, getAllCategory);

export default router;