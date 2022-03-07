import dotenv from 'dotenv';
dotenv.config();
import {
  DEV_DATABASE_URL,
  TEST_DATABASE_URL,
  ENVIRONMENT,
} from '../settings.js';

const envConfigs = {
  development: {
    url: DEV_DATABASE_URL,
    dialect: 'mysql',
  },
  test: {
    url: TEST_DATABASE_URL,
    dialect: 'mysql',
  },
  // production: {
  //   url: PROD_DATABASE_URL,
  //   dialect: 'mysql',
  // },
};

export default envConfigs;
