var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')

gulp.task('compile-sass', function () {
//   return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
})

gulp.task('move-js', function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream())
})

// run sass when serve runs
// run server
// watch for any changes in src/scss folder and reload the browser
// also watch for sass changes
// watch for html changes
gulp.task('launch-server', ['compile-sass'], function () {
  browserSync.init({
    server: './src'
    // proxy: 'http://localhost/project/code%20design/dzcode.design/bootstrap%20workspace/1st%20udemy/src'
  })
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['compile-sass'])
  gulp.watch('src/*.html').on('change', browserSync.reload)
})

// run gulp
// launch server and browser
// execute js task
gulp.task('default', ['move-js', 'launch-server'])
