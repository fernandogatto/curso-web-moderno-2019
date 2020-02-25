// JSON é um formato de dados em forma de texto que pode ser lido
// por diversas linguagens

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a+b+c
    }
}
console.log(obj)
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))