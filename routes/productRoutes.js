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
router.route('/get-all-products').get(getAllProducts);//auth,

//add product
router
  .route('/add-product')
  .post(auth, admin, upload.single('image'), addProduct);

//update product
router
  .route('/update-product/:id')
  .put(auth, admin, upload.single('image'), updateProduct);

//delete a product
router
  .route('/delete-product/:id')
  .delete(auth, admin, deleteProduct);

//get one product
router.route('/get-one-product/:id').get(auth, getOneProduct);

export default router;
