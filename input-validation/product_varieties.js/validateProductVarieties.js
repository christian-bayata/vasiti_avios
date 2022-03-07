import Joi from 'joi';

/**
 * @params product_variety
 * @returns {*}
 */

const validateProductVariety = (product_variety) => {
  const schema = Joi.object({
    size: Joi.string().required(),
    color: Joi.string().required(),
    quantity: Joi.string().required(),
    price: Joi.string().required(),
    productId: Joi.number().required(),
  });
  return schema.validate(product_variety);
};

export default validateProductVariety;
