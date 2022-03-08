import express from 'express';
const router = express.Router();
import productsController from '../controllers/products.js';

router.route('/products').get(productsController.getProducts);
// router.route('/product/:id').get(productsController.getProductById);
router.route('/product/new').post(productsController.createProduct);
router.route('/update/product/:id').put(productsController.updateProduct);

export default router;
