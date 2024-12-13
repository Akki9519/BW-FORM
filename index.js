const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("./config/db.js");
const LoginRoutes = require("./routes/login.routes.js");

// Initialize app
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure required environment variables are set
if (!process.env.PORT) {
  console.error("ERROR: PORT is not defined in the environment variables.");
  process.exit(1);
}

// Connect to the database
connectToDatabase()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process if the database connection fails
  });

// Routes
app.get("/", (req, res) => {
  res.send("The API is running");
});

app.use("/api/v1/", LoginRoutes);

// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error("Unexpected error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
