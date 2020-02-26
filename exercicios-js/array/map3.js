Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit Lapis", "preco": 22.50 }',
    '{ "nome": "Caneta", "preco": 1.90 }'
]

// Retornar apenas um array com os precos

let precos = carrinho.map2(function(element) {
    return JSON.parse(element).preco
})
console.log(precos)