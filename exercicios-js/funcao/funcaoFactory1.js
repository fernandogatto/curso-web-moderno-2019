// Funcao que retorna um objeto
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

console.log(criarPessoa('Ana', 'Silva', 12))

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 1199.99))
console.log(criarProduto('iPad', 1299.99))