const AltModel = require("../models/alt.model.js");
const ltModel = require("../models/lt.model.js");
const hwbModel = require("../models/hwb.model.js");

exports.getAllHwbDetails = async (req, res) => {
  try {
    // Find all users and populate altDetails if needed
    const users = await hwbModel.find(); // Replace 'relatedField' with the actual field to populate if necessary
    // console.log(users, "user");
    // Check if any users were found
    if (!users || users.length === 0) {
      console.log("No users found");
      return res.status(404).json({ message: "No users found" });
    }



    // Send the response with users data
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
    // Find all users and populate altDetails if needed
    const users = await AltModel.find(); // Replace 'relatedField' with the actual field to populate if necessary
    // console.log(users, "user");
    // Check if any users were found
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
    // Destructure the required fields from req.body
    const { email, course, honourableNumber, bsgnumber, parchmentNumber } = req.body;
    console.log(req.body, "Request body");

    if (!honourableNumber && !parchmentNumber) {
      return res.status(400).json({ message: "Both honourableNumber and parchmentNumber are required" });
    }

    // If only one of the required fields is missing, specify which one is missing
    if (!honourableNumber) {
      return res.status(400).json({ message: "honourableNumber is required" });
    }

    if (!parchmentNumber) {
      return res.status(400).json({ message: "parchmentNumber is required" });
    }

    // Check if additional fields are present (if needed for validation)
    if (!email || !course || !bsgnumber) {
      return res.status(400).json({ message: "email, course, and bsgnumber are required" });
    }

    // Find the user in the database matching the provided credentials
    const ltuser = await ltModel.findOne({ HONOURABLE_CHARGE_NO: honourableNumber });
    console.log(ltuser,"ltuser")
    const altuser = await AltModel.findOne({ 
      HONOURABLE_CHARGE_NO:honourableNumber });
    const hwbuser = await hwbModel.findOne({ PARCHMENT_NO:parchmentNumber });

    // If user not found in any model, reject the request
    if (!ltuser ) {
      return res.status(401).json({ message: "Invalid honourableNumber or parchmentNumber" });
    }

    // If user is found, proceed
    return res.status(200).json({ message: "Login successful", ltuser });
  } catch (error) {
    console.error("Error during login process:", error);
    return res.status(500).json({ message: "Error during login process", error: error.message });
  }
};

