const pessoa = {
    nome: 'Ana',
    idade: 10,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 500
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumrada = true } = pessoa
console.log(sobrenome, bemHumrada);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);