let aprovados = ['Ana','Bia','Carla','Daniela','Ester']
console.log(aprovados)

aprovados[6] = 'Paula'
console.log(aprovados)
// posicao 5 fica vazia

aprovados.sort()
console.log(aprovados)
// sort altera o array ordenando

delete aprovados[1]
console.log(aprovados[1])
// o indice 1 se torna undefined mas o array nao é reordenado

aprovados = ['Ana','Bia','Carla']
aprovados.splice(1,1)
console.log(aprovados)