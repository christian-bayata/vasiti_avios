/**
 * @param page
 * @param size
 * @returns {Object} return an object
 */
function getPagination(page, size) {
  const limit = size ? +size : 4;
  const offset = page ? page * limit : 0;
  return { limit, offset };
}

/**
 * @param data
 * @param page
 * @param limit
 * @returns {Object} return an object
 */
function getPagingData(data, page, limit) {
  const { count: productCount, rows: products } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(productCount / limit);
  return { data, currentPage, totalPages };
}

export { getPagination, getPagingData };
