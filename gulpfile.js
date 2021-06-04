var gulp = require('gulp');
var sass = require('gulp-sass');
var changed = require('gulp-changed');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    name: 'Dev App',
    root: '',
    livereload: true,
    port: 8002,
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src('scss/*.scss')
  .pipe(changed('/css/'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('css'));
});


gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['css']);
  gulp.watch(['*.html'], ['html']); 
});

gulp.task('default', ['css','watch','connect','html']);
