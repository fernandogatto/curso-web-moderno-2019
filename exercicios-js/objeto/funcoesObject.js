// um objeto é composto por chaves e valores
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 14
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // listada
    writable: false,
    value: '01/01/2018'
})

pessoa.dataNascimento = '01/01/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

Object.freeze(pessoa) // congela o objeto
pessoa.nome = 'Adriana'
console.log(pessoa.nome)