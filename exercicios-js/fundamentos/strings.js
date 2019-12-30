const nome = 'Fernando';

console.log(nome.charAt(0)); // pegar o caracter na string
console.log(nome.charCodeAt(0)); // pegar o valor na tabela Asc II
console.log(nome.indexOf('e')); // retornar o indice na string

console.log(nome.substring(1));
console.log(nome.substring(0, 3));

console.log('Nome '.concat(nome).concat('!'));

console.log('Ana,Maria,Pedro'.split(','));