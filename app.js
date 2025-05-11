import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
// import sequelize from './config/db.js';
import errorMiddleware from './middleware/error.middleware.js';

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error Handler
app.use(errorMiddleware);

// DB Connection
// sequelize.sync().then(() => console.log('Database synced'));

export default app;
