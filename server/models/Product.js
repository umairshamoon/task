//job-task
//PtiI0aeWia2SaDaY

const mongoose = require('mongoose');
const Joi = require('joi');

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
  image: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

//product model
exports.Product = mongoose.model('Product', productSchema);
//Joi validate Method
exports.validateProduct = function ({
  name,
  discription,
  image,
}) {
  const schema = {
    name: Joi.string().min(3).max(20).required(),
    discription: Joi.string().min(20).max(255).required(),
  };
  return Joi.validate(
    {
      name,
      discription,
    },
    schema
  );
};
