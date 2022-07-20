//npm packages
const express = require('express');

//routes
const authRoutes = require('../routes/authRoutes');
const productsRoutes = require('../routes/productRoutes');

//middlewares

module.exports = function (app) {
  // app.use(cors());
  app.use(express.json());

  app.use('/api/auth', authRoutes);
  app.use('/api/products', productsRoutes);
};
