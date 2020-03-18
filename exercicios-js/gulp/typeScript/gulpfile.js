const gulp = require('gulp')
const series = gulp.series
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

function transformarTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build'))
}

module.exports.default = series(
    transformarTS
)