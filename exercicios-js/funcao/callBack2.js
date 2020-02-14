const notas = [7.7, 6.5, 8.5, 5.4, 9.9, 3.0, 4.5];

// Sem callback
let notasBaixas = [];
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

// Com callback
notasBaixas = notas.filter(function(nota) {
    return nota < 7;
});
console.log(notasBaixas);

notasBaixas = notas.filter(nota => nota < 7);
console.log(notasBaixas);