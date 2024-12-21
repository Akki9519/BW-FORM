const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: String,
  bsgNumber: String,
  course: String,
  honourableNumber: String,
  parchmentNumber: String,
  name: String,
  state: String,
  honourableChargeNo: String,
  issuedDate: Date,
  bsgUid: String,
  verificationToken: { type: String, default: null },
  tokenExpiry: { type: Date, default: null },
  emailVerified: { type: Boolean, default: false },
});
const User = mongoose.model('User', userSchema);

module.exports = User;