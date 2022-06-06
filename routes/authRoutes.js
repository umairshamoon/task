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
router.route('/register').post(registerUser);
router
  .route('/update-profile/:id')
  .put([auth || admin], updateProfile);

export default router;
