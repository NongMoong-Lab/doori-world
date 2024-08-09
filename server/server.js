const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 3000;

const connectDB = require("./db");
connectDB();

// Static files middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
