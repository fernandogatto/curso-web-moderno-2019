const escola = [{
    nome: 'Turma M1',
    alunos: [
        { nome: 'Maria', nota: 7.3 },
        { nome: 'Paulo', nota: 5.5 },
    ]
}, {
    nome: 'Turma M2',
    alunos: [
        { nome: 'Juliana', nota: 8.0 },
        { nome: 'Gustavo', nota: 6.1 },
    ]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)