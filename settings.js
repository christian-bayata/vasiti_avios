import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const ENVIRONMENT = process.env.NODE_ENV || 'development';

export const DEV_DATABASE_URL = process.env.DEV_DATABASE_URL;
export const TEST_DATABASE_URL = process.env.TEST_DATABASE_URL;
export const PROD_DATABASE_URL = process.env.PROD_DATABASE_URL;
