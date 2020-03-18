const gulp = require('gulp')
const series = gulp.series
const concat = require('gulp-concat') // concatenar varios arquivos em um so
const uglify = require('gulp-uglify') // minifica
const babel = require('gulp-babel') // translate

function padrao(callback) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    return callback()
}

module.exports.default = series(
    padrao
)