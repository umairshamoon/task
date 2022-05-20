//const jwt = require('jsonwebtoken');
import pkg from 'jsonwebtoken';
const { verify } = pkg;
import config from 'config';
import { StatusCodes } from 'http-status-codes';
export default function (req, res, next) {
  const token = req.header('Auth');
  if (!token)
    return res
      .status(StatusCodes.FORBIDDEN)
      .send('access denied');
  try {
    const decoded = verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;

    next();
  } catch (error) {
    console.log(error);
    return res.status(400).send('invalid token');
  }
}
