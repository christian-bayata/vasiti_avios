'use strict';

import Sequelize from 'sequelize';
const env = process.env.NODE_ENV || 'development';
import envConfigs from '../config/config.js';
const config = envConfigs[env];

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database connection established successfully');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;
