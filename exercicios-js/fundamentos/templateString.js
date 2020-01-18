const nome = 'Rebeca';
const concatenacao = 'Ola ' + nome + '!';
const templateStr = `
Ola
${nome}!`;

console.log(concatenacao, templateStr);

// expressoes
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`${up('cuidado')}`);