var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')

gulp.task('compile-sass', function () {
//   return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
  return gulp.src(['frameworks/node_modules/bootstrap/scss/bootstrap.scss', 'workbench/bootstrap workspace/1st udemy/src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('workbench/bootstrap workspace/1st udemy/src/css'))
    .pipe(browserSync.stream())
})

gulp.task('move-js', function () {
  return gulp.src(['frameworks/node_modules/bootstrap/dist/js/bootstrap.min.js', 'frameworks/node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('workbench/bootstrap workspace/1st udemy/src/js'))
    .pipe(browserSync.stream())
})

// run sass when serve runs
// run server
// watch for any changes in src/scss folder and reload the browser
// also watch for sass changes
// watch for html changes
gulp.task('launch-server', ['compile-sass'], function () {
  browserSync.init({
    server: './workbench/bootstrap workspace/1st udemy/src'
    // proxy: 'http://localhost/project/code%20design/dzcode.design/bootstrap%20workspace/1st%20udemy/src'
  })
  gulp.watch(['frameworks/node_modules/bootstrap/scss/bootstrap.scss', 'workbench/bootstrap workspace/1st udemy/src/scss/*.scss'], ['compile-sass'])
  gulp.watch('workbench/bootstrap workspace/1st udemy/src/*.html').on('change', browserSync.reload)
})

// run gulp
// launch server and browser
// execute js task
gulp.task('default', ['move-js', 'launch-server'])
