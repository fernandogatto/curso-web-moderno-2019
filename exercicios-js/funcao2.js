// armazenando uma funcao em uma variavel
const imprimirSoma = function(a = 1, b = 0) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma();

// armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

// retorno implicito de uma funcao arrow
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3));