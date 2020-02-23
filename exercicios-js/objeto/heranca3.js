const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(Object.entries(filha1))
console.log(`${filha1.nome}, ${filha1.corCabelo}`)

const filha2 = Object.create(pai, {
    nome: { value: 'Beatriz', writable: false, enumerable: true }
})
console.log(Object.entries(filha2))
console.log(`${filha2.nome}, ${filha2.corCabelo}`)

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Herança: ${key}`)
}