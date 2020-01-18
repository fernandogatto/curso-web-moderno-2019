function Pessoa() {
    this.idade = 0;

    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }/*.bind(this)*/, 1000); // a funcao se repete a cada 1000 ms
    // o this no bind faz referencia a funcao Pessoa
}

new Pessoa;