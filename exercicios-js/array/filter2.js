Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2490.90, fragil: true },
    { nome: 'iPad Pro', preco: 4190.90, fragil: true },
    { nome: 'Copo de plastico', preco: 4.90, fragil: false },
    { nome: 'Copo de vidro', preco: 12.90, fragil: true }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))