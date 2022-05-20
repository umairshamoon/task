import express from 'express';
import authRoutes from '../routes/authRoutes.js';
import productsRoutes from '../routes/productRoutes.js';
import cors from 'cors';

export default function (app) {
  app.use(cors());
  app.use(express.json());

  app.use('/api/auth', authRoutes);
  app.use('/api/products', productsRoutes);
}
