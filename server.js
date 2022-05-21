import express from 'express';
const app = express();
import dotenv from 'dotenv';

dotenv.config();

import db from './start/db.js';
import logger from './start/logger.js';

import routes from './start/routes.js';

//calls
logger;
routes(app);
db(process.env.DB_URL);

const port = process.env.PORT;
app.listen(port, () => console.log('listening at port ', port));
