import dotenv from 'dotenv';
dotenv.config();
import { DEV_DATABASE_URL, TEST_DATABASE_URL } from '../settings.js';

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
    url: '//mysql://b67a5484c7ec7b:c1828df1@us-cdbr-east-05.cleardb.net/heroku_77cdc0840c1f69d?reconnect=true',
    dialect: 'mysql',
  },
};

export default envConfigs;
