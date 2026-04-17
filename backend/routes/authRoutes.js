const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password, course } = req.body;

  try {
    const exist = await Student.findOne({ email });
    if (exist) return res.status(400).json({ msg: "Email exists" });

    const hash = await bcrypt.hash(password, 10);

    const user = new Student({ name, email, password: hash, course });
    await user.save();

    res.json({ msg: "Registered" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Student.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ msg: "Invalid" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token, user });
});

// UPDATE PASSWORD
router.put("/update-password", auth, async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await Student.findById(req.user.id);

  const match = await bcrypt.compare(oldPassword, user.password);
  if (!match) return res.status(400).json({ msg: "Wrong password" });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.json({ msg: "Password updated" });
});

// UPDATE COURSE
router.put("/update-course", auth, async (req, res) => {
  const { course } = req.body;

  await Student.findByIdAndUpdate(req.user.id, { course });

  res.json({ msg: "Course updated" });
});

module.exports = router;