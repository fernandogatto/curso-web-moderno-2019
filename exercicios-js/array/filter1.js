const produtos = [
    { nome: 'Notebook', preco: 2490.90, fragil: true },
    { nome: 'iPad Pro', preco: 4190.90, fragil: true },
    { nome: 'Copo de plastico', preco: 4.90, fragil: false },
    { nome: 'Copo de vidro', preco: 12.90, fragil: true }
]

console.log(produtos.filter(function (element) {
    return element.fragil
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))