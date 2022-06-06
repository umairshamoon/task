//npm packages
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

//routes
import authRoutes from '../routes/authRoutes.js';
import productsRoutes from '../routes/productRoutes.js';

//middlewares
import error from '../middlewares/error.js';

export default function (app) {
  // app.use(cors());
  app.use(express.json());

  app.use('/api/auth', authRoutes);
  app.use('/api/products', productsRoutes);
  app.use(error);
}
