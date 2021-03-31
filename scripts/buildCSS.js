// Externals
const gulp = require("gulp");
const concat = require("gulp-concat");
const minify = require("gulp-clean-css");

return gulp
  .src("./static/styles/*.css")
  .pipe(concat("index.css"))
  .pipe(minify())
  .pipe(gulp.dest("./dist/styles"));
