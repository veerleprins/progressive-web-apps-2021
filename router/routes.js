const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

// Functions
const { home } = require("./renders/home");
const { movie } = require("./renders/movie");
const { search } = require("./renders/search");
const { error } = require("./renders/error");

// Routes
router.get("/", home);
router.get("/:id", movie);
router.post("/", urlencodedParser, search);
router.get("/*", error);

module.exports = router;
