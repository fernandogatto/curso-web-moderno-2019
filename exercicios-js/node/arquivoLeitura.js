const fs = require('fs') // File System do Node

// __dirname: diretorio atual, disponivel em todos os arquivos do node
const caminho = __dirname + '/arquivo.json'

// Sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} ${config.db.port}`)
})

// JSON sincrono
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta')
    console.log(arquivos)
})