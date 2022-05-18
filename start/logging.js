// const winston = require('winston');
import winston from 'winston';
import 'winston-mongodb';
import 'express-async-errors';
//require('winston-mongodb');
//require('express-async-errors');
export default function () {
  //uncaught exceptions
  process.on('uncaughtException', (err) => {
    console.log('Uncaught exception', err);
    winston.error(err.message, err);
    process.exit(1);
  });
  //unhandeled rejectins
  process.on('unhadledRejection', (err) => {
    console.log('Unhandled Rejection', err);
    winston.error(err.message, err);
    process.exit(1);
  });
  winston.add(
    new winston.transports.File({ filename: 'logfile.log' })
  );
  winston.add(
    new winston.transports.MongoDB({
      db: 'mongodb+srv://job-task:PtiI0aeWia2SaDaY@cluster0.cws44.mongodb.net/?retryWrites=true&w=majority',
    })
  );
}
