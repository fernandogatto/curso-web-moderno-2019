// Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    getNome() {
        console.log(`${ this.nome }`);
    }
}

const p1 = new Pessoa('Joao');
p1.getNome();

// Funcao factory
const criarPessoa = nome => {
    return {
        getNome: () => console.log(`${ nome }`)
    }
}

const p2 = criarPessoa('Abel');
p2.getNome();