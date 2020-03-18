const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHtml, appCSS, appJS, appImg } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHtml, appCSS, appJS, appImg),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)