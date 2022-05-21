import winston from 'winston';
import { StatusCodes } from 'http-status-codes';
export default function (err, req, res, next) {
  winston.error(err.message, err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something Failed');
}
