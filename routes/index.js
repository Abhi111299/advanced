import express from 'express';
const router = express.Router();

// Import individual route modules
import authRoutes from './auth.routes.js';
import adminRoutes from './admin.routes.js';
// import userRoutes from './user.routes.js';

// Use them with base paths
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
// router.use('/users', userRoutes);

export default router;
