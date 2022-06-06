import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import db from './start/db.js';
import logger from './start/logger.js';

import routes from './start/routes.js';

//calls
// app.use(cors());
logger;
routes(app);
db(process.env.DB_URL);
console.clear();

const port = process.env.PORT;
app.listen(port, () => console.log('listening at port ', port));
