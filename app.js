// Externals
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
require("dotenv").config();

// Routes
const routes = require("./router/routes");

// Internals
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.static("dist"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layouts/layout");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
