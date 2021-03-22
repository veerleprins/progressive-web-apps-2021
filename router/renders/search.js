// Modules
const fetchData = require("../../modules/collecting/collect");
const clean = require("../../modules/cleaning/clean");

const search = async (req, res, next) => {
  try {
    // Internals:
    const query = req.body.search;

    // Check if query is empty:
    if (query === "") {
      res.redirect("/");
    } else {
      // Getting the data:
      const searchData = await fetchData(`search/movie`, `&query=${query}`);

      // Clean all data:
      const data = searchData.results.filter((movie) => {
        return (
          movie.poster_path !== null &&
          movie.genre_ids.includes(27) &&
          movie.original_language === "en"
        );
      });
      const cleanedData = clean.getNecessary(data);

      // Render the page:
      res.render("index.ejs", {
        movies: cleanedData,
        pageTitle: "Home",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = search;
