// Externals
const gulp = require("gulp");

return gulp.src("./static/images/**/*.*").pipe(gulp.dest("dist/images/"));
