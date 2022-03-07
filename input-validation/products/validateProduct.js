import Joi from 'joi';

/**
 * @params product
 * @returns {*}
 */

const validateProduct = (product) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
    rating: Joi.number().required(),
    image_url: Joi.string().required(),
    category: Joi.string().required(),
    seller: Joi.string().required(),
    stock: Joi.string().required(),
    noOfReviews: Joi.string().required(),
  });
  return schema.validate(product);
};

export default validateProduct;
