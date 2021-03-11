// Externals
const express = require("express");
const app = express();
require("dotenv").config();

// Routes
const routes = require("./router/routes");

// Internals
const PORT = process.env.PORT || 4000;

// Middleware
app.set("view engine", "ejs");
app.use(express.static("static"));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
