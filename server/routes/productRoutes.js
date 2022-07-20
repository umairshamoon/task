const { Router } = require('express');
const admin = require('../middlewares/admin');
const auth = require('../middlewares/auth');
const { upload } = require('../middlewares/upload');
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
} = require('../controllers/productController');

const router = Router();

//get all products
router.route('/get-all-products').get(getAllProducts); //auth,

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

module.exports = router;
