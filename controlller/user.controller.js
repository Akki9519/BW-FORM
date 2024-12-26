const AltModel = require("../models/alt.model.js");
const ltModel = require("../models/lt.model.js");
const hwbModel = require("../models/hwb.model.js");
const LoginModel =require("../models/login.models.js")
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const FormModel=require('../models/form.model.js')
exports.getAllHwbDetails = async (req, res) => {
  try {
   
    const users = await hwbModel.find(); 

    if (!users || users.length === 0) {
      console.log("No users found");
      return res.status(404).json({ message: "No users found" });
    }



   
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users with altDetails:", error);
    return res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

exports.getAllAltDetails = async (req, res) => {
  try {
   
    const users = await AltModel.find();
    
    if (!users || users.length === 0) {
      console.log("No users found");
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users with altDetails:", error);
    return res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

exports.getAllLtDetails = async (req, res) => {
  try {
    const users = await ltModel.find();

    if (!users || users.length === 0) {
      console.log("No users found");
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users with ltDetails:", error);
    return res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
  
    const {  course, honourableNumber,  parchmentNumber } = req.body;
    console.log(req.body,parchmentNumber, "Request body");

    if (!(honourableNumber || parchmentNumber)) {
      return res.status(400).json({ message: "Both honourableNumber and parchmentNumber are required" });
    }

   
    if (!( course )) {
      return res.status(400).json({ message: " course are required" });
    }

   
    const ltuser = await ltModel.findOne({ HONOURABLE_CHARGE_NO: honourableNumber });
    console.log(ltuser,"ltuser")
    const altuser = await AltModel.findOne({ 
      HONOURABLE_CHARGE_NO:honourableNumber });
    const hwbuser = await hwbModel.findOne({ PARCHMENT_NO:parchmentNumber });

  


    const user = new LoginModel({
      course:course,
       honourableNumber:honourableNumber,
        parchmentNumber:parchmentNumber
    });

    await user.save();
  
    return res.status(200).json({ message: "Login successful", ltuser,altuser,hwbuser,user });
  } catch (error) {
    console.error("Error during login process:", error);
    return res.status(500).json({ message: "Error during login process", error: error.message });
  }
};



exports.verifyEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
   
    const user = await ltModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (user.emailVerified) {
      return res.status(400).json({ message: 'Email is already verified.' });
    }
  
    const verificationToken = crypto.randomBytes(32).toString('hex');
    user.verificationToken = verificationToken;
    user.tokenExpiry = Date.now() + 3600000; // Token valid for 1 hour
    
    await user.save();

    // Send the verification email
    const transporter = nodemailer.createTransport({
      service: "gmail",
  auth: {
    user: "bsgtrainersportal@gmail.com",
    pass: "fpws qwsz pzae ocud",
  },
    });

    const verificationLink = `http://localhost:3000/verify/${verificationToken}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Email Verification - The Bharat Scouts and Guides',
      html: `
        <h3>Welcome to The Bharat Scouts and Guides!</h3>
        <p>Thank you for registering. Please verify your email by clicking the link below:</p>
        <a href="${verificationLink}" style="display:inline-block; padding:10px 20px; background-color:#1D56A5; color:white; text-decoration:none; border-radius:5px;">Verify Email</a>
        <p>If the button doesn't work, copy and paste the link below into your browser:</p>
        <p>${verificationLink}</p>
        <p>Note: The link will expire in 1 hour.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: 'Verification email sent! Please check your inbox.',
    });
  } catch (error) {
    console.error('Error during email verification:', error);
    return res
      .status(500)
      .json({ message: 'Error sending verification email. Please try again later.' });
  }
};

exports.confirmEmailVerification = async (req, res) => {
  const { token } = req.params;
  console.log(req.params,"params")
  try {
  
    const user = await ltModel.findOne({
      verificationToken: token,
      tokenExpiry: { $gt: Date.now() }, 
    });
    console.log(user,"user")
    if (!user) {
      return res
        .status(400)
        .json({ message: 'Invalid or expired token. Please request a new verification email.' });
    }

    user.emailVerified = true;
    user.verificationToken = undefined; // Clear the token
    user.tokenExpiry = undefined;
    await user.save();

    return res.status(200).json({ message: 'Email verified successfully!' , redirectUrl: '/form'});
  } catch (error) {
    console.error('Error confirming email verification:', error);
    return res.status(500).json({ message: 'Error verifying email. Please try again later.' });
  }
};


exports.form = async (req, res) => {
  try {
    // Validate incoming data
    if (!req.body) {
      return res.status(400).json({ message: 'Invalid request body' });
    }



    
    const formData = new FormModel(req.body);

    console.log("Form data received:", formData);

    // Save to database
    await formData.save();

    // Send success response
    res.status(201).json({
      message: 'Form submitted successfully',
      data: formData,
    });
  } catch (error) {
    console.error('Error saving form data:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation error',
        error: error.errors,
      });
    }

    // Handle other errors
    res.status(500).json({
      message: 'Error saving form data',
      error: error.message || 'Internal Server Error',
    });
  }
};

