// Externals
const express = require("express");
const router = express();

// Modules
const fetchData = require("../modules/collecting/collect");

// Functions
const home = async (req, res) => {
  const data = await fetchData(
    `discover/movie`,
    `&with_genres=27&without_genres=35%2C14%2C18%2C28&page=1`
  );
  res.render("index.ejs", { movies: data.results });
};

const error = (req, res) => {
  res.status(404).render("404");
};

// Routes
router.get("/", home);
router.get("/*", error);

module.exports = router;
