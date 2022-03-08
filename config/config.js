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
  production: {
    url: 'mysql://b4f3322cc5b93c:b0804dd8@us-cdbr-east-05.cleardb.net/heroku_29594656521cb42?reconnect=true',
    dialect: 'mysql',
  },
};

export default envConfigs;
