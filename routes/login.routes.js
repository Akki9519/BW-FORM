const express = require('express');
const Login = require('../models/login.models'); 

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, bsgNumber, course, honourableNumber, parchmentNumber } = req.body;
  console.log(req.body,"body")



  try {
    const newLogin = new Login({
      email,
      bsgNumber,
      course,
      honourableNumber,
      parchmentNumber,
    });
    await newLogin.save();
    res.status(201).json({ message: 'Login data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving data' });
  }
});

module.exports = router;
