const alunos = [
    { nome: 'Maria', nota: 7.3, bolsista: true },
    { nome: 'Gabriela', nota: 8.7, bolsista: false },
    { nome: 'Abel', nota: 6.4, bolsista: true },
    { nome: 'Carlos', nota: 9.5, bolsista: false }
]

// Imperativo
let soma = 0
for(let i = 0; i < alunos.length; i++) {
    soma += alunos[i].nota
}
console.log(soma / alunos.length)

// Declarativo
const notas = alunos.map(aluno => aluno.nota)
const somaNotas = (acumulador, nota) => acumulador + nota
const totalNotas = notas.reduce(somaNotas)
console.log(totalNotas / alunos.length)
