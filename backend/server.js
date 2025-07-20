// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./models/User");
const Course = require("./models/Course");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentlearning")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error", err));

// ====================== AUTH ROUTES ======================

// Signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User already exists" });
  const user = new User({ email, password });
  await user.save();
  res.json({ message: "Signup successful" });
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ message: "Login successful" });
});

// ====================== COURSE ROUTES ======================

// Get all courses
app.get("/api/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Get single course
app.get("/api/courses/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json(course);
});

app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
