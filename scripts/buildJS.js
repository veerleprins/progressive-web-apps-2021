// Externals
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

return gulp
  .src("./static/js/*.js")
  .pipe(concat("bundle.js"))
  .pipe(uglify())
  .pipe(gulp.dest("./dist/js"));
