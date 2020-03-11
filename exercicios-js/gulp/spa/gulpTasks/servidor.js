const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas', () => {
    watch('src/**/*.html', () => gulp.start('appHtml'))
    watch('src/**/*.css', () => gulp.start('appCss'))
    watch('src/**/*.js', () => gulp.start('appJs'))
    watch('src/assets/imgs/**/*.*', () => gulp.start('appImgs'))
})

gulp.task('servidor', ['monitorarMudancas'], () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 8080,
        open: true
    }))
})