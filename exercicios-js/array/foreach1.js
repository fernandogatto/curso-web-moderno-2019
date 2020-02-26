const aprovados = ['Alan','Daniel','Aldo','Elizabeth','Sabrina']

// forEach recebe como paramentos valor, indice e array
aprovados.forEach(function(nome, indice) {
    console.log(`${indice+1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const mostrarAprovados =  function(nome, indice) {
    console.log(`${indice+1}: ${nome}`)
}
aprovados.forEach(mostrarAprovados)