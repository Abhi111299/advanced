import express from 'express';
import dotenv from 'dotenv';
import * as path from 'path';
import authRoutes from './routes/auth.routes.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from './swagger/swaggerDefinition.js';
import errorMiddleware from './middleware/error.middleware.js';
import routesV1 from './routes/index.js';

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(errorMiddleware);

export default app;
