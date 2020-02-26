const alunos = [
    { nome: 'Maria', nota: 7.3, bolsista: true },
    { nome: 'Gabriela', nota: 8.7, bolsista: false },
    { nome: 'Abel', nota: 6.4, bolsista: true },
    { nome: 'Carlos', nota: 9.5, bolsista: false }
]

// Desafio 1: Todos os alunos sao bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista))