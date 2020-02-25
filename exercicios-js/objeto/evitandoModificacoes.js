// Object.preventExtensions
const produto = {
    nome: 'Produto', preco: 1.99, tag: 'promocao'
}
Object.preventExtensions(produto)
console.log(produto)
console.log('Extensivel: ', Object.isExtensible(produto))
/*
Object.preventExtensions permite alterar e deletar um atributo ja existe,
mas nao criar novos
*/
produto.nome = 'Borracha'
produto.descricao = 'Lorem ipsum'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {
    nome: 'Juliana', idade: 35
}
Object.seal(pessoa)
console.log(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
/*
Object.seal só permite alterar os atributos ja existentes
*/
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = '29'
console.log(pessoa)

/*
Object.freeze é constante, ou seja, é selado e
seus atributos não podem ser alterados (writable false)
*/