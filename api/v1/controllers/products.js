import 'express-async-errors';
import { getPagination, getPagingData } from '../../../helper/pagination.js';
import helper from '../../../helper/helper.js';
import validateProduct from '../../../input-validation/products/validateProduct.js';
import status from 'http-status';
import { Product } from '../../../models/associations.js';

const productsController = {
  /**
   * @Author - "Edomaruse, Frank"
   * @Responsibilty - Creates a new product
   * @param req
   * @param res
   * @param next
   * @route - /api/v1/product/new
   * @returns {Object}
   */
  async createProduct(req, res, next) {
    return helper(async () => {
      const { error } = await validateProduct(req.body);
      if (error)
        return res.status(status.BAD_REQUEST).send(error.details[0].message);
      const { product_name, product_description } = req.body;
      const product = await Product.create({
        product_name,
        product_description,
      });
      res.status(status.OK).send({
        success: true,
        product,
      });
    }, next);
  },
  /**
   * @Responsibilty - Users can get products by pagination and name filter;
   * @param req
   * @param res
   * @param next
   * @route - /api/v1/products
   * @returns {Object}
   */
  async getProducts(req, res, next) {
    const { page, size, name } = req.query;
    const { limit, offset } = getPagination(page, size);
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    await Product.findAndCountAll({ where: condition, limit, offset })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.status(status.OK).send(response);
      })
      .catch((err) => {
        return next(new ErrorHandler(err.message, status.BAD_REQUEST));
      });
  },
  /**
   * @Responsibilty - Updates product varieties
   * @param req
   * @param res
   * @param next
   * @route - /api/v1/update/product/:id
   * @returns {Object}
   */
  async updateProduct(req, res, next) {
    return helper(async () => {
      let product = await Product.findByPk(req.params.id);
      if (!product) {
        return next(
          new ErrorHandler(
            'Product with the given id does not exist',
            status.NOT_FOUND
          )
        );
      }
      await product.update(req.body, { where: { id: req.params.id } });
      res.status(status.OK).send({
        success: true,
        message: 'Product was successfully updated',
      });
    }, next);
  },
};

export default productsController;
