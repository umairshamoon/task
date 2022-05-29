import { format, createLogger, transports } from 'winston';
const { timestamp, combine, json, errors } = format;
import 'express-async-errors';
import { Logger } from 'concurrently';

const logger = createLogger({
  format: combine(timestamp(), errors({ stack: true }), json()),
  transports: [
    new transports.File({
      filename: 'errors.log',
      level: 'error',
      handleExceptions: true,
    }),
  ],
});
export default logger;
