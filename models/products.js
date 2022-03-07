import { DataTypes } from 'sequelize';
import sequelize from './index.js';

var Product = sequelize.define('Product', {
  // Model attributes are defined here
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_varieties: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_uploaded: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  date_edited: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Product;
