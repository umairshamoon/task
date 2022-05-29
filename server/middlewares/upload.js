//import { path } from 'express/lib/application';
import multer from 'multer';
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    return cb(
      null,
      new Date().toISOString() + '-' + file.originalname
    );
  },
});

const upload = multer({ storage: storage });

export default upload;
