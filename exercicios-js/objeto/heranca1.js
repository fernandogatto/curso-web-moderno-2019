const ferrari = {
    modelo: 'F40',
    velMax:  350
}

const volvo = {
    modelo: 'V40',
    velMax: 300
}

/*
* Um Objeto tem uma referencia para o endereço de memoria do seu prototipo,
* que consiste a herança no JS. Quando um atributo nao é encontrado no Objeto,
* esse atributo é buscado nos prototipos em nivel mais alto até ser encontrado.
* 
* O prototipo de um objeto é acessado atraves do atributo __proto__
* Apenas funcoes tem o atributo prototype
*/

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)