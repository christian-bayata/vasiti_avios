import { DataTypes } from 'sequelize';
import sequelize from './index.js';

var ProductImage = sequelize.define(
  'ProductImages',
  {
    // Model attributes are defined here
    image_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productVarietyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

export default ProductImage;
