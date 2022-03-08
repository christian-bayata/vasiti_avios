import express from 'express';
const router = express.Router();
import productVarietiesController from '../controllers/product_varieties.js';

router
  .route('/product/variety')
  .post(productVarietiesController.createProductVariants);
router
  .route('/update/product/variety/:id')
  .put(productVarietiesController.updateProductVariant);
router
  .route('/delete/product/variety/:id')
  .delete(productVarietiesController.deleteProductVariant);

export default router;
