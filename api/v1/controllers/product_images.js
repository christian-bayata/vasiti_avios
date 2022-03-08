import 'express-async-errors';
import status from 'http-status';
import { ProductImage, ProductVariety } from '../../../models/associations.js';
import ErrorHandler from '../../../utils/errorHandler.js';
import helper from '../../../helper/helper.js';

const productImagesController = {
  /**
   * @Author - "Edomaruse, Frank"
   * @Responsibilty - Store product images
   * @param req
   * @param res
   * @param next
   * @route - /api/v1/image
   * @returns {Object}
   */
  async storeProductImages(req, res, next) {
    return helper(async () => {
      const { image_name, image_url } = req.body;
      const variety = await ProductVariety.findOne({
        where: { id: req.body.productVarietyId },
      });
      if (!variety) {
        return next(
          new ErrorHandler('Prodduct variety not found', status.NOT_FOUND)
        );
      }
      const productImage = await ProductImage.create({
        image_name,
        image_url,
        productVarietyId: variety.id,
      });
      res.status(status.OK).send({
        success: true,
        productImage,
      });
    }, next);
  },
};

export default productImagesController;
