//job-task
//PtiI0aeWia2SaDaY

import mongoose from 'mongoose';
import Joi from 'joi';

//product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
  },
  discription: {
    type: String,
    minlength: 10,
    maxlength: 255,
    required: true,
  },
  postedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

//product model
const Product = mongoose.model('Product', productSchema);
//Joi validate Method
function validateProduct(product) {
  const schema = {
    name: Joi.string().min(3).max(20).required(),
    discription: Joi.string().min(20).max(255).required(),
  };
  return Joi.validate(product, schema);
}

export { Product, validateProduct };
