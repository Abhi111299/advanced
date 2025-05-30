import auth from './docs/auth/index.js';
import admin from './docs/admin/index.js';
import category from './docs/category/index.js';

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'APIs',
    description: 'This includes all the APIs.',
    contact: {
      name: 'Engineering Team',
    },
    version: '1.0.0',
  },
  servers: [
    {
      url: '/api/',
      description: 'Version-1.0.0',
    },
  ],
  paths: {
    ...auth,
    ...admin,
    ...category
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

export default swaggerDefinition;