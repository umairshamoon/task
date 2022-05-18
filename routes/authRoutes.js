import { Router } from 'express';
import admin from '../middlewares/admin.js';
import auth from '../middlewares/auth.js';

import {
  login,
  registerUser,
  updateProfile,
} from '../controllers/authController.js';

const router = Router();
router.route('/login').post(login);
router.route('/registerUser').post([auth, admin], registerUser);
router
  .route('/updateProfile')
  .post([auth || admin], updateProfile);

export default router;
