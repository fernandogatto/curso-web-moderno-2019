// operador ... rest(juntar) / spread (espalhar)

// usar rest com parametro de funcao
function somar(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(somar(1,2,3,4))

// usar spread como objeto
const funcionario = {
    nome: 'Pedro',
    idade: 22
}
const clone = {
    ativo: true,
    ...funcionario
}
console.log(clone)

// usar spread como array
const grupoA = ['Alice', 'Bernardo', 'Caio']
const grupoB = [...grupoA, 'Cecilia', 'Roberto']
console.log(grupoB)