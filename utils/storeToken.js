import _ from 'lodash';

/**
 * @Responsibilty - Utility function for storing user token
 * @param user
 * @param statusCode
 * @param res
 * @returns {Object}
 */
const storeToken = (user, statusCode, res) => {
  const token = user.generateAuthToken();
  //Use lodash to filter out the password
  let result = _.pick(user, ['firstName', 'lastName', 'email']);
  //Get token and store in req.header;
  result.token = token; 
  return res.status(statusCode).header('x-auth-token', token).send({
    sucess: true,
    result,
  });
};

export default storeToken; 
