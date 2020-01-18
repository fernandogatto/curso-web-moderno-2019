let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('os verdadeiros:');
console.log(!!3); // numero positivo
console.log(!!-1); // numero negativo
console.log(!!' '); // espaco vazio
console.log(!!'string'); // string
console.log(!![ ]); // array
console.log(!!{ }); // objeto
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // atribuicao verdadeira

console.log('os falsos:');
console.log(!!0); // zero
console.log(!!''); // string vazia
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log((isAtivo = false)); // atribuicao falsa

console.log('analisando:');
console.log(!!('' || null || 0 || 1)); // pega o unico valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido');
nome = 'Rebeca';
console.log(nome || 'Desconhecido');