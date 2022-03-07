import ProductVariety from './product_varieties.js';
import Product from './products.js';
import ProductImages from './product_images.js';

//Associations

//hasOne, hasMany

Product.hasMany(ProductVariety, {
  foreignKey: { name: 'productId', allowNull: false },
});
ProductVariety.hasMany(ProductImages, {
  foreignKey: { name: 'productVarietyId', allowNull: false },
});

//BelongsTo
ProductVariety.belongsTo(Product, {
  foreignKey: { name: 'productId', allowNull: false },
});
ProductImages.belongsTo(ProductVariety, {
  foreignKey: { name: 'productVarietyId', allowNull: false },
});

export { Product, ProductImages, ProductVariety };
