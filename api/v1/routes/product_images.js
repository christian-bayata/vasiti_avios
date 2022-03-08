import express from 'express';
const router = express.Router();
import productImagesController from '../controllers/product_images.js';

router.route('/image').post(productImagesController.storeProductImages);

export default router;
