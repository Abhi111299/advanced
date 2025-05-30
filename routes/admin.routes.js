import express from 'express';
import { registerByAdmin } from '../controllers/admin.controller.js';
import { registerSchema } from '../validations/common.validation.js';
import { category, getAllCategory, updateCategory, getSingleCategory } from '../controllers/category.controller.js';
import { categorySchema } from '../validations/common.validation.js';
import validate from '../middleware/validate.js';
import { authenticate } from '../middleware/auth.middleware.js'

const router = express.Router();

router.post('/register', authenticate, validate(registerSchema), registerByAdmin);
router.post('/category', authenticate, validate(categorySchema), category);
router.get('/get_all_categories',  getAllCategory);
router.get('/get_category/:id', authenticate, getSingleCategory);
router.put('/update_category', authenticate, updateCategory);

export default router;