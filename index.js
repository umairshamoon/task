import express from 'express';
const app = express();
import db from './start/db.js';
import routes from './start/routes.js';

//calls
db();
routes(app);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('listening at port ', port));
