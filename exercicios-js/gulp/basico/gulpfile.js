const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['dependencia1', 'dependencia2'], () => {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
})

gulp.task('dependencia1', () => {
    console.log('Dependencia 1')
})

gulp.task('dependencia2', () => {
    console.log('Dependencia 2')
})

gulp.task('fim', () => {
    console.log('Fim')
})