const gulp = require('gulp')
const series = gulp.series
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformarCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHtml() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

module.exports.default = series(
    transformarCSS,
    copiarHtml
)