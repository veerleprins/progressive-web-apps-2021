// Externals
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

// Functions
const home = require("./renders/home");
const movie = require("./renders/movie");
const search = require("./renders/search");
const offline = require("./renders/offline");
const error = require("./renders/error");

// Routes
router
  .get("/", home)
  .get("/movies/:id", movie)
  .post("/", urlencodedParser, search)
  .get("/offline", offline)
  .get("/*", error);

module.exports = router;
