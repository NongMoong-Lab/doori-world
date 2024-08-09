const express = require("express");
const router = express.Router();
const User = require("../models/User");

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
    res.status(200).send({ message: "Login successful" });
  } catch (error) {
    res.status(500).send({ error: "에러" });
  }
});

router.post("/logout", (req, res) => {
  res.send("logout");
});

module.exports = router;
