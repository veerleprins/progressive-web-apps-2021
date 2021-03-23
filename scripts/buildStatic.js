// Externals
const gulp = require("gulp");

// Internals
const assets = ["./static/manifest.json", "./static/service-worker.js"];

return gulp.src(assets).pipe(gulp.dest("dist"));
