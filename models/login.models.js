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

});
const User = mongoose.model('User', userSchema);

module.exports = User;