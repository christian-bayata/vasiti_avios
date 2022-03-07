import ProductVariety from 'product-varieties.js';
import Product from 'product.js';
import ProductImages from 'product-images.js';

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
