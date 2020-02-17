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

// Construtora
function criarPessoa(nome) {
    this.nome = nome;

    this.getNome = function() {
       console.log(`${ this.nome }`);
    }
}

const p2 = new criarPessoa('Abel');
p2.getNome();

/*
* FORMAS DE SE CRIAR UM OBJETO
*
* Funcao Factory: retorna um objeto
* Classe: instancia um novo objeto de uma classe, que para acessar os atributos usa o this
* Funcao Construtora: intancia um novo objeto a partir de uma funcao, que para acessar os atributos usa o this
*/