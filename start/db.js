import mongoose from 'mongoose';
import winston from 'winston';

export default function (url) {
  mongoose.connect(url).then(() => {
    winston.info('connect successfully');
  });
}
