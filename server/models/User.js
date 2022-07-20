const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

//user Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'Customer'],
    default: 'Customer',
  },
});

//jsonwebtoken
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, role: this.role },
    process.env.JWT_SECRET
  );
  return token;
};

//joi validate method
exports.validateUser = function (user) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
    role: Joi.string().valid('Admin', 'Customer'),
  };
  return Joi.validate(user, schema);
};

//user Model
exports.User = mongoose.model('User', userSchema);
