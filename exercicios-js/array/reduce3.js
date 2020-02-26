Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'Maria', nota: 7.3, bolsista: true },
    { nome: 'Gabriela', nota: 8.7, bolsista: false },
    { nome: 'Abel', nota: 6.4, bolsista: true },
    { nome: 'Carlos', nota: 9.5, bolsista: false }
]

const notas = alunos.map(aluno => aluno.nota)
const soma = (acumulador, nota) => acumulador + nota
console.log(notas.reduce2(soma, 0))