//import { path } from 'express/lib/application';
const multer = require('multer');
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    return cb(
      null,
      new Date().toISOString() + '-' + file.originalname
    );
  },
});

exports.upload = multer({ storage: storage });
