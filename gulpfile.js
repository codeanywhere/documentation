const browserSync = require('browser-sync').create()
const gulp = require('gulp')
const gulpClean = require('gulp-clean')
const gulpCopy = require('gulp-copy')
const gulpRename = require('gulp-rename')
const ejs = require('gulp-ejs')

const sidebar = require('./sidebar.json')

const paths = {
  views: {
    src: 'src/views/**/*',
    dest: 'dist',
  },
  assets: {
    src: 'src/public/**/*',
    dest: 'dist',
  },
}

function assets() {
  return gulp
    .src(paths.assets.src)
    .pipe(gulpCopy(''))
    .pipe(gulp.dest(paths.assets.dest))
}

function clean() {
  return gulp.src('dist', { allowEmpty: true }).pipe(gulpClean())
}

function views() {
  return gulp
    .src(paths.views.src)
    .pipe(
      ejs({
        title: 'Codeanywhere Docs',
        sidebar,
        active: 'test',
        rendered: 'test',
      })
    )
    .pipe(gulpRename({ extname: '.html' }))
    .pipe(gulp.dest(paths.views.dest))
}

function reload(done) {
  browserSync.reload()
  done()
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './dist',
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
  })
  done()
}

const watch = function () {
  gulp.watch(paths.views.src, { ignoreInitial: false }, views)
}

const build = gulp.series(clean, gulp.parallel(assets, views))

const development = gulp.series(build, serve, watch)
exports.default = build
exports.development = development
