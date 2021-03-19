const offline = async (req, res, next) => {
  try {
    // Rendering the page:
    res.render("offline.ejs", {
      pageTitle: "Offline...",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = offline;
