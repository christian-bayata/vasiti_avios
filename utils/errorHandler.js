/**
 * @Responsibilty - Utility function for handling errors
 * @param message
 * @param statusCode
 * @returns {Object}
 */

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
