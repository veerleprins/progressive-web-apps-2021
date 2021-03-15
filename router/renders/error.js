const error = (req, res) => {
  try {
    res.status(404).render("404", { pageTitle: "Page not found", styleLink: "/styles.main.css" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = error;
