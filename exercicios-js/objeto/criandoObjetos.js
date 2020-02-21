// Notacao literal
const obj1 = { nome: 'Lapis'}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object()
obj2.nome = 'Borracha'
console.log(obj2)

// Funcoes construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome // publico
    // preco e desconto privado
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 2.99, 0.1)
const p2 = new Produto('Caderno', 9.99, 0.2)
console.log(p1.nome, p1.getPrecoComDesconto())
console.log(p2.nome, p2.getPrecoComDesconto())

// Funcao fectory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Maria', 8000, 1)
const f2 = criarFuncionario('Bianca', 6900, 5)
console.log(f1.nome, f1.getSalario())
console.log(f2.nome, f2.getSalario())