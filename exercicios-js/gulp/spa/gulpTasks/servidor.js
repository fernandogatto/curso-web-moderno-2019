const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(callback) {
    return gulp.src('build')
        .pipe(webserver({
            livereload: true,
            port: 8080,
            open: true
        }))
}

function monitorarArquivos(callback) {
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.css', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appImg')())

    return callback();
}

module.exports = {
    monitorarArquivos,
    servidor
}