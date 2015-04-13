var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

gulp.task('jspm-bundle', function () {
  return gulp.src('')
    .pipe($.shell([
      'jspm bundle-sfx lib/main dist/bundle.js'
    ]))
})

gulp.task('bundle', ['jspm-bundle'], function () {
  return gulp.src('dist/bundle.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('html', function () {
  return gulp.src('src/index.html')
    .pipe($.htmlReplace({
      'js': ['bundle.js']
    }))
    .pipe(gulp.dest('dist/'))
})

gulp.task('misc', function () {
  return gulp.src('src/favicon.ico')
    .pipe(gulp.dest('dist/'))
})

gulp.task('build', ['bundle', 'html', 'misc'])
