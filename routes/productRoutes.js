import { Router } from 'express';
import admin from '../middlewares/admin.js';
import auth from '../middlewares/auth.js';
import upload from '../middlewares/upload.js';

import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
} from '../controllers/productController.js';

const router = Router();

router.route('/getAllProducts').get(auth, getAllProducts);
router
  .route('/addProduct')
  .post(auth, admin, upload.single('Image'), addProduct);
router
  .route('/updateProduct/:id')
  .put(auth, admin, updateProduct);
router
  .route('/deleteProduct/:id')
  .delete(auth, admin, deleteProduct);
router.route('/getOneProduct/:id').get(auth, getOneProduct);

export default router;
