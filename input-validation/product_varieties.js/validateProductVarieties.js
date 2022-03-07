import Joi from 'joi';

/**
 * @params product_variety
 * @returns {*}
 */

const validateProductVariety = (product_variety) => {
  const schema = Joi.object({
    size: Joi.number().required(),
    color: Joi.string().required(),
    quantity: Joi.string().required(),
    rating: Joi.number().required(),
    product_imageId: [Joi.number()],
    price: Joi.number().required(),
  });
  return schema.validate(product_variety);
};

export default validateProductVariety;
