const { format, createLogger, transports } = require('winston');
const { timestamp, combine, json, errors } = format;
require('express-async-errors');

exports.logger = createLogger({
  format: combine(timestamp(), errors({ stack: true }), json()),
  transports: [
    new transports.File({
      filename: 'errors.log',
      level: 'error',
      handleExceptions: true,
    }),
  ],
});
