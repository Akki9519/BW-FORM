const mongoose = require('mongoose');

// Define the schema for User model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  honourableNumber: { type: String },
  bsgNumber: { type: String, required: true },
  parchmentNumber: { type: String},
}, { timestamps: true });

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
