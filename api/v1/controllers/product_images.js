import 'express-async-errors';
import status from 'http-status';

const productImagesController = {
  /**
   * @Author - "Edomaruse, Frank"
   * @Responsibilty - Store product images
   * @param req
   * @param res
   * @param next
   * @route - /api/v1/images
   * @returns {Object}
   */
  async storeProductImages(req, res, next) {
    return helper(async () => {
      //   const { error } = await validateProductVariety(req.body);
      //   if (error)
      //     return res.status(status.BAD_REQUEST).send(error.details[0].message);
      const { image_name, image_url } = req.body;
      const variety = await ProductVarieties.create({
        size,
        color,
        quantity,
        price,
      });
    }, next);
  },
};

export default productImagesController;
