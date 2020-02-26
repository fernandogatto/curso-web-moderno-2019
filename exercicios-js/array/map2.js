const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit Lapis", "preco": 22.50 }',
    '{ "nome": "Caneta", "preco": 1.90 }'
]

// Retornar apenas um array com os precos

let precos = carrinho.map(function(element) {
    return JSON.parse(element).preco
})
console.log(precos)