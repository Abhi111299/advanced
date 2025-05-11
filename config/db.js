import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Create a Sequelize instance with PostgreSQL configuration from environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,           // Database name
  process.env.DB_USER,           // Database user
  process.env.DB_PASSWORD,       // Database password
  {
    host: process.env.DB_HOST,   // Database host
    dialect: 'postgres',         // Dialect (PostgreSQL in this case)
    logging: false,              // Disable SQL query logging
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error.message);
  });

export default sequelize;
