const pilotos = ['Vettel', 'Alonso','Barrichelo','Massa']
pilotos.pop() // remove a ultima posicao
console.log(pilotos)

pilotos.push('Senna') // adiciona na ultima posicao
console.log(pilotos)

pilotos.shift() // remove a primeira posicao
console.log(pilotos)

pilotos.unshift('Hemilton') // adiciona na primeira posicao
console.log(pilotos)

pilotos.splice(2,0,'Bottas','Massa') // modifica a partir do indice 2 adicionando novos elementos
console.log(pilotos)

pilotos.splice(3,1) // modifica a partir do indice 3 removendo 1 elemento
console.log(pilotos)

const novosPilotos = pilotos.slice(1,4) // novo array
console.log(novosPilotos)
