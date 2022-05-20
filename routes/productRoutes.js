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

//get all products
router.route('/getAllProducts').get(auth, getAllProducts);

//add product
router
  .route('/addProduct')
  .post(auth, admin, upload.single('image'), addProduct);

//update product
router
  .route('/updateProduct/:id')
  .put(auth, admin, upload.single('image'), updateProduct);

//delete a product
router
  .route('/deleteProduct/:id')
  .delete(auth, admin, deleteProduct);

//get one product
router.route('/getOneProduct/:id').get(auth, getOneProduct);

export default router;
