import express from 'express';
import dotenv from 'dotenv';
import * as path from 'path';
import authRoutes from './routes/auth.routes.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from './swagger/swaggerDefinition.js';
import errorMiddleware from './middleware/error.middleware.js';
import { default as routesV1 } from './routes/auth.routes.js';

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const swaggerOptions = {
  swaggerDefinition,
  apis: ['./routes.js'],
};

app.use('/api', routesV1); // Assigning Defined Routes
const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Routes
// app.use('/api/auth', authRoutes);

// Error Handler
app.use(errorMiddleware);

// DB Connection
// sequelize.sync().then(() => console.log('Database synced'));

export default app;
