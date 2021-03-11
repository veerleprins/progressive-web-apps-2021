// Modules
const fetchData = require("../../modules/collecting/collect");
const clean = require("../../modules/cleaning/clean");

const movie = async (req, res, next) => {
  try {
    const ID = req.params.id;
    // Fetch all data:
    const movieData = await fetchData(`movie/${ID}`, ``);
    const recommendedData = await fetchData(`movie/${ID}/recommendations`, ``);
    const providerData = await fetchData(`movie/${ID}/watch/providers`, ``);

    // Clean all data:
    const providerList = clean.checkKey(providerData.results);
    const uniqueProviders = clean.getUnique(providerList);
    const cleanProviders = clean.getReplaced(uniqueProviders, "-");
    const cleanRecommended = clean
      .getNecessary(recommendedData.results)
      .slice(0, 5);

    res.render("movie.ejs", {
      movie: movieData,
      recommendations: cleanRecommended,
      providers: cleanProviders,
      pageTitle: "Movie",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { movie };
