import 'express-async-errors';
import helper from '../../../helper/helper.js';
import validateProductVarieties from '../../../input-validation/product_varieties.js/validateProductVarieties.js';
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
      const { error } = await validateProductVarieties(req.body);
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
  /**
   * @Responsibilty - Updates product varieties
   * @param req
   * @param res
   * @param next
   * @route - /api/v1/update/product/variety/:id
   * @returns {Object}
   */
  async updateProductVariant(req, res, next) {
    return helper(async () => {
      //Input validation with Joi
      // const { error } = await validateProductVarieties(req.body);
      // if (error)
      //   return res.status(status.BAD_REQUEST).send(error.details[0].message);
      let productVariety = await ProductVariety.findByPk(req.params.id);
      if (!productVariety) {
        return next(
          new ErrorHandler(
            'Product with the given id does not exist',
            status.NOT_FOUND
          )
        );
      }
      await productVariety.update(req.body, { where: { id: req.params.id } });
      res.status(status.OK).send({
        success: true,
        message: 'Product variety was successfully updated',
      });
    }, next);
  },
};

export default productVarietiesController;
