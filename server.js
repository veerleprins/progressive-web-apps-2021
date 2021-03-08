// Externals
const express = require("express");
const router = express();

// Internals
const PORT = "3000";

// Routes
router.get("/", () => {
  res.send(`This is a test`);
});

router.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
