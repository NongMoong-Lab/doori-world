const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/login", async (req, res) => {
  const { input_id, input_pw } = req.body;

  try {
    const user = await User.findOne({ user_id: input_id });

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    if (user.user_pw !== input_pw) {
      return res.status(401).send({ error: "Invalid password" });
    }

    // 비밀번호 일치시
    const token = jwt.sign({ userId: user.user_id, userAvatar: user.user_avatar }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json({ message: "Login success" });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

module.exports = router;
