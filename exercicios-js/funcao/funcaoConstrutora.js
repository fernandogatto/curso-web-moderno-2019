function Carro(velocidadeMax = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0;

    // metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual = velocidadeAtual + delta;
        } else {
            velocidadeAtual = velocidadeMax;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    }
}

console.log('### UNO ###');
const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

console.log('### FERRARI ###');
const ferrari = new Carro(350, 10);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());