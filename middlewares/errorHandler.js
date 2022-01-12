const logger = require('../config/logger');
const { errorResponse } = require('../utils/response');

module.exports = (err, req, res, next) => {
  switch (err.name) {
    case "Error":
      err.status = err.status || 400;
      break;
    case "MongoError":
      err.status = 400;
      break;
    case "ValidationError":
      err.status = 422;
      err.message = err.message.split(":")[2] || err.details[0].message; // Mongo and Joi validator
      break;
    default:
      logger.error(err);
      err.status = 500;
  }

  return errorResponse (res, err.status, err.message)

};
