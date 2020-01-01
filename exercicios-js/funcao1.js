// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma();
imprimirSoma(2, 3, 4, 5, 6);

// funcao com retorno
function somar(a = 1, b = 0) {
    return a + b;
}

console.log(somar(2, 3));
console.log(somar(2));
console.log(somar());