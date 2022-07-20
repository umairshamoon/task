const winston = require('winston');
const { StatusCodes } = require('http-status-codes');
module.exports = function (err, req, res, next) {
  winston.error(err.message);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something Failed');
};
