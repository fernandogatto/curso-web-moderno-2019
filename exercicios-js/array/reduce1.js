const alunos = [
    { nome: 'Maria', nota: 7.3, bolsista: true },
    { nome: 'Gabriela', nota: 8.7, bolsista: false },
    { nome: 'Abel', nota: 6.4, bolsista: true },
    { nome: 'Carlos', nota: 9.5, bolsista: false }
]

console.log(alunos.map(aluno => aluno.nota))
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)