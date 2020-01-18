// criar funcao de forma literal
function  func1() {}

// armazenar em uma variavel
const func2 = function () { }

// armazenar em um array
const array = [function (a, b) { return a + b }, func1, func2];
console.log(array[0](2, 3));

// armazenar em um atributo de objeto
const obj = {};
obj.falar = function () { return 'Opa'; }
console.log(obj.falar());

// passar funcao como parametro
function run(load) {
    load();
}
run(function () { console.log('Carregando...'); });