import Joi from 'joi';

/**
 * @params product
 * @returns {*}
 */

const validateProduct = (product) => {
  const schema = Joi.object({
    product_name: Joi.string().required(),
    product_description: Joi.string().required(),
  });
  return schema.validate(product);
};

export default validateProduct;
