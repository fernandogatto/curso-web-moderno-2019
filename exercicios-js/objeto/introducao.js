const produto = new Object
produto.nome = 'Cadeira'
produto.preco = 110

console.log(produto)
console.log(produto.nome)
console.log(produto.preco)

const carro = {
    modelo: 'A123',
    valor: 9000,
    proprietario: {
        nome: 'Ruan Lucas',
        idade: 55,
        cpf: '111.111.111-11',
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Ana',
        idade: 22
    }, {
        nome: 'Vinicius',
        idade: 32
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

console.log(carro)

// delete carro.condutores
console.log(carro.condutores)