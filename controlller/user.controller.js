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

// exports.login = async (req, res) => {
//   try {
//     const users = await ltModel.find();

//     if (!users || users.length === 0) {
//       console.log("No users found");
//       return res.status(404).json({ message: "No users found" });
//     }
//     return res.status(200).json(users);
//   } catch (error) {
//     console.error("Error fetching users with ltDetails:", error);
//     return res
//       .status(500)
//       .json({ message: "Error fetching users", error: error.message });
//   }
// };
