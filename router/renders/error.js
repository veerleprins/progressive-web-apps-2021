const error = (req, res) => {
  try {
    // Render the page:
    res.status(404).render("404", {
      pageTitle: "Page not found",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = error;
