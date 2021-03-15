// Modules
const fetchData = require("../../modules/collecting/collect");
const clean = require("../../modules/cleaning/clean");

const home = async (req, res, next) => {
  try {
    const param = `&with_genres=27&without_genres=35%2C14%2C18%2C28&page=`;
    const [data1, data2, data3, data4, data5] = await Promise.all(
      [1, 2, 3, 4, 5].map((page) =>
        fetchData("discover/movie", `${param}${page}`)
      )
    );
    const merged = clean.getNested(
      [data1, data2, data3, data4, data5],
      "results"
    );
    const required = clean.getNecessary(merged);
    const sorted = clean.sortArray(required, "avgVoted");
    const data = clean.filterItem(sorted, "voted").slice(0, 10);
    res.render("index.ejs", { movies: data, pageTitle: "Home" });
  } catch (err) {
    next(err);
  }
};

module.exports = home;
