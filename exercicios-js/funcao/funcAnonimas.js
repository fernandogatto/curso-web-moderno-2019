const soma = function(a, b) {
    return a + b;
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);

imprimirResultado(3, 4, function(a, b) {
    return a - b;
});

imprimirResultado(3, 4, (a, b) => {
    return a * b;
});

const pessoa = {
    falar: function() {
        console.log('Ola mundo');
    },
    contar: () => {
        console.log('1, 2, 3...');
    }
}

pessoa.falar();
pessoa.contar();