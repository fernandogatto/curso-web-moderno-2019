const gulp = require('gulp')
const series = gulp.series

function dependencia1(callback) {
    console.log('Dep 1')
    return callback()
}

function dependencia2(callback) {
    console.log('Dep 2')
    return callback()
}

function copiar(callback) {
    console.log('Copiar')
    gulp.src(['pastaA/*.txt']).pipe(gulp.dest('pastaB'))
    return callback()
}

function fim(callback) {
    console.log('Fim')
    return callback()
}

module.exports.default = series(
    dependencia1,
    dependencia2,
    copiar,
    fim
)