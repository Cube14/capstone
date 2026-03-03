const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");

dotenv.config();
connectDB();

const app = express();   // ⚠️ THIS MUST COME BEFORE USING app

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// ✅ Protected test route (AFTER app is created)
app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "You accessed protected data" });
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});