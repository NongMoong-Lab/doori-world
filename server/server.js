const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

const connectDB = require("./db");
connectDB();

// Static files middleware
app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// user 테스트
const User = require("./models/User");
app.post("/", async (req, res) => {
  try {
    const user = new User({
      user_id: "test",
      password: "1234",
      avatar: "/test_avatar",
    });

    await user.save();
    res.status(201).send("User created and saved in MongoDB");
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send("Error creating user");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
