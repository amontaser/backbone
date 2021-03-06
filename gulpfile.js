var gulp = require('gulp');
var sass = require('gulp-sass');

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);

});

gulp.task('default', [ 'watch', 'sass']);
