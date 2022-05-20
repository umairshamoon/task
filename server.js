import express from 'express';
const app = express();

import db from './start/db.js';

import routes from './start/routes.js';
import config from './start/config.js';
//calls

config();
routes(app);
db();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('listening at port ', port));
