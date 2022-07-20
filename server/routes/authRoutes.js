const { Router } = require('express');
const admin = require('../middlewares/admin.js');
const auth = require('../middlewares/auth.js');

const {
  login,
  registerUser,
  updateProfile,
} = require('../controllers/authController');

// const { email } =require( '../controllers/email.js';)

const router = Router();

router.route('/login').post(login);
router.route('/register').post(registerUser);
router
  .route('/update-profile/:id')
  .put([auth || admin], updateProfile);

module.exports = router;
