const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build'))
})