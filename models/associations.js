import ProductVariety from './product_varieties.js';
import Product from './products.js';
import ProductImage from './product_images.js';

//Associations

//hasOne, hasMany

Product.hasMany(ProductVariety, {
  foreignKey: { name: 'productId', allowNull: false },
});
ProductVariety.hasMany(ProductImage, {
  foreignKey: { name: 'productVarietyId', allowNull: false },
});

//BelongsTo
ProductVariety.belongsTo(Product);
ProductImage.belongsTo(ProductVariety);

export { Product, ProductImage, ProductVariety };
