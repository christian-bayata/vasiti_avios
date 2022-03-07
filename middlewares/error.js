import status from 'http-status';

/**
 * Error handler that serves as a middleware for the API
 * @param {Object} err - error object
 * @param {Object} res - response object
 * @returns {object} error object
 */

function errorMiddleware(err, req, res, next) {
  err.statusCode = err.statusCode || status.INTERNAL_SERVER_ERROR;
  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }
}

export default errorMiddleware;
