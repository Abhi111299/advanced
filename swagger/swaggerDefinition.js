import auth from './docs/auth/index.js';

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'APIs',
    description: 'This includes the all the APIs.',
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
    ...auth
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