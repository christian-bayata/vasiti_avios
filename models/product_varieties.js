import { DataTypes } from 'sequelize';
import sequelize from './index.js';

var ProductVariety = sequelize.define(
  'ProductVariety',
  {
    // Model attributes are defined here
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

export default ProductVariety;
