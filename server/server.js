// const express = require('express');
// const app = express();
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();
// app.use(cors());

// require('./start/db.js')(process.env.DB_URL);
// // require('./start/logger.js')();
// require('./start/routes.js')(app);

// //calls

// const port = process.env.PORT;
// app.listen(port, () => console.log('listening at port ', port));

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

require('./start/db')(process.env.DB_URL);
require('./start/routes')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening at port ${port}`));
