// Externals
const express = require("express");
const router = express();
require("dotenv").config();

// Internals
const PORT = process.env.PORT;

// Middleware
router.set("view engine", "ejs");
router.set("views", "views");

// Routes
router.get("/", (req, res) => {
  res.send(`This is a test`);
});

router.get("/*", (req, res) => {
  res.status(404).render("404");
});

router.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
