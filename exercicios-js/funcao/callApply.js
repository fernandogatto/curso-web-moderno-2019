function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

// Chamar a funcao diretamente
global.preco = 1299
global.desc = 0.1
console.log(getPreco())

const produto = {
    nome: 'Notebook',
    preco: 1234,
    desc: 0.15,
    getPreco
}

// Chamar a funcao usando um objeto
console.log(produto.getPreco())

const carro = {
    nome: 'Carro',
    preco: 4999,
    desc: 0.2
}

// Chamar a funcao usando call
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, '$'))
// call(contexto, parametros)

// Chamar a funcao usando apply
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17, '$']))
// apply(conteto, [parametros])