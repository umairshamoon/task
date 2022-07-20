const { StatusCodes } = require('http-status-codes');

module.exports = function (req, res, next) {
  if (req.user.role !== 'Admin')
    return res
      .status(StatusCodes.FORBIDDEN)
      .send('forbidden access');
  next();
};
