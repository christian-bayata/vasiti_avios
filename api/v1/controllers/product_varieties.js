import 'express-async-errors';
import helper from '../../../helper/helper.js';
import validateProduct from '../../../input-validation/product_varieties.js/validateProductVarieties.js';
import ErrorHandler from '../../../utils/errorHandler.js';
import status from 'http-status';
import {
  Product,
  ProductVariety,
  ProductImages,
} from '../../../models/associations.js';

const productVarietiesController = {
  /**
   * @Author - "Edomaruse, Frank"
   * @Responsibilty - Creates product varieties
   * @param req
   * @param res
   * @param next
   * @route - /api/v1/product/variety
   * @returns {Object}
   */
  async createProductVariants(req, res, next) {
    return helper(async () => {
      const { error } = await validateProduct(req.body);
      if (error)
        return res.status(status.BAD_REQUEST).send(error.details[0].message);
      const { size, color, quantity, price } = req.body;
      const product = await Product.findOne({
        where: { id: req.body.productId },
      });
      if (!product) {
        return next(
          new ErrorHandler(
            'Product with this Id does not exist',
            status.NOT_FOUND
          )
        );
      }
      const productVariety = await ProductVariety.create({
        size,
        color,
        quantity,
        price,
        productId: product.id,
      });
      res.status(status.OK).send({
        success: true,
        productVariety,
      });
    }, next);
  },
};

export default productVarietiesController;
