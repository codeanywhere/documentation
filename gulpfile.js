const browserSync = require('browser-sync').create()
const ejs = require('ejs')
const fs = require('fs')
const gulp = require('gulp')
const gulpClean = require('gulp-clean')
const gulpMarkdown = require('gulp-markdown')
const through = require('through2')
const vinyl = require('vinyl')
const webpack = require('webpack-stream')
const exec = require('gulp-exec')

const paths = {
  views: {
    src: 'src/views/index.ejs',
    dest: 'dist',
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist',
  },
  docs: {
    src: 'src/docs/markdowns/**/*.md',
  },
}

function assets() {
  return gulp.src(paths.assets.src).pipe(gulp.dest(paths.assets.dest))
}

function clean() {
  return gulp.src('dist', { allowEmpty: true }).pipe(gulpClean())
}

function search() {
  return gulp
    .src('src/tools/search.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'))
}

function updateSearchPool() {
  return gulp.src('src/tools/updateSearchPool.ts').pipe(exec((file) => `ts-node ${file.path}`))
}

function views() {
  const sidebar = require('./sidebar.json')
  const template = fs.readFileSync('src/views/index.ejs').toString()
  return gulp
    .src(paths.docs.src)
    .pipe(gulpMarkdown())
    .pipe(
      through.obj(function (file, enc, cb) {
        this.push(
          new vinyl({
            contents: Buffer.from(
              ejs.render(template, {
                title: 'Codeanywhere Docs',
                sidebar,
                rendered: String(file.contents),
                filename: 'src/views/index.ejs',
              })
            ),
            path: file.relative,
          })
        )
        cb()
      })
    )
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
  gulp.watch([paths.views.src, paths.docs.src], { ignoreInitial: false }, gulp.series(views, reload))
  gulp.watch([paths.assets.src], { ignoreInitial: false }, gulp.series(assets, reload))
}

const build = gulp.series(updateSearchPool, clean, gulp.parallel(assets, views, search))
const development = gulp.series(build, serve, watch)

exports.default = build
exports.development = development
