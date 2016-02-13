var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');

gulp.task('scripts', function() {
  return gulp.src('socket.js')
    .pipe(rename('socket.min.js'))
    .pipe(uglify({
      preserveComments: 'some',
      outSourceMap: true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['scripts']);
