const gulp = require('gulp')
const concat = require('gulp-concat') // concatenar varios arquivos em um so
const uglify = require('gulp-uglify') // tirar espacos em branco
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            // minified: true
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', function(err) { console.log(err) })
        .pipe(concat('concat.min.js'))
        .pipe(gulp.dest('build'))
})