import express from 'express';
const router = express.Router();
import productVarietiesController from '../controllers/product_varieties.js';

router
  .route('/product/variety')
  .post(productVarietiesController.createProductVariants);

export default router;
