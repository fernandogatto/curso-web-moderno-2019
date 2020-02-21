const pessoa = {
    _nome: '',
    _idade: 0,

    get nome() {
        return this._nome
    },
    set nome(nome) {
        this._nome = nome
    },
    get idade() {
        return this._idade
    },
    set idade(idade) {
        this._idade = idade
    }
}

pessoa.nome = 'Abel' // set
console.log(pessoa.nome) // get
pessoa.idade = 26
console.log(pessoa.idade)