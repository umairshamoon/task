//const jwt = require('jsonwebtoken');

const { verify } = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
module.exports = function (req, res, next) {
  const token = req.header('Auth');
  if (!token)
    return res
      .status(StatusCodes.FORBIDDEN)
      .send('access denied');
  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send('invalid token');
  }
};
