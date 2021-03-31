// Externals
const gulp = require("gulp");
const uglify = require("gulp-uglify");

return gulp.src("./static/js/*.js").pipe(uglify()).pipe(gulp.dest("./dist/js"));
