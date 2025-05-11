import { PrismaClient } from '@prisma/client';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

const prisma = new PrismaClient();

const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

prisma.$connect().then(() => {
  console.log('Connected to PostgreSQL database!');
}).catch(err => {
  console.error('Error connecting to the database:', err);
});

export default prisma;
