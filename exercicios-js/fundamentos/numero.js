const peso1 = 1.0;
const peso2 = Number('2.0');

console.log('Pesos: ', peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const nota1 = 8.123;
const nota2 = 6.123;
const total = nota1 * peso1 + nota2 * peso2;
const media = total / (peso1 + peso2);

console.log('Media: ', media.toFixed(2));
console.log('Media: ', media.toString());
console.log('Media em binario: ', media.toString(2)); // em binario
console.log(typeof media);
console.log(typeof Number);