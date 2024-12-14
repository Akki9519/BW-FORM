
const mongoose = require('mongoose');

// Function to connect to the MongoDB database
const connectToDatabase = async () => {
    try {

        const connectionString =`mongodb+srv://kapilrkbsgindia:DD905V7FQPNPLcAU@bsgforms.lw50a.mongodb.net/bsgform`;
        await mongoose.connect(connectionString);

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToDatabase;
