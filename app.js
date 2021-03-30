// Externals
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const compression = require("compression");
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
app.use(compression());
app.use((req, res, next) => {
  if (process.env.NODE_ENV != "development" && !req.secure) {
    return res.redirect("https://" + req.headers.host + req.url);
  }
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
