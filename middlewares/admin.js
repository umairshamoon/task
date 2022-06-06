import { StatusCodes } from 'http-status-codes';

export default function (req, res, next) {
  if (req.user.role !== 'Admin')
    return res
      .status(StatusCodes.FORBIDDEN)
      .send('forbidden access');
  next();
}
