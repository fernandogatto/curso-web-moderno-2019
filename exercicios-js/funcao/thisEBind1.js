const pessoa = {
    saudacao: 'Ola',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // a funcao bind passa um objeto por parametro para amarrar o this a este