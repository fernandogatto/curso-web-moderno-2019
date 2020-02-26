console.log(typeof Array)
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
        // valor, indice, array
    }
}

const aprovados = ['Alan','Daniel','Aldo','Elizabeth','Sabrina']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice+1}: ${nome}`)
})