const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validates email format
  },
  bsgNumber: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  honourableNumber: {
    type: String,
  },
  parchmentNumber: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;
