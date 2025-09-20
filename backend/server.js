const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/projects", projectRoutes);

// MongoDB connection
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Optional: handle Mongo errors after initial connection
mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err);
});
