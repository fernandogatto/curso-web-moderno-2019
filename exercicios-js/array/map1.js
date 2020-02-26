const nums = [1,2,3,4]

// Map mapeia um array para um novo array
let resultado = nums.map(elem => elem*2)
console.log(resultado, nums)

const somaDez = element => element + 10
const triplo = element => element * 3
const paraDinheiro = element => `R$ ${parseFloat(element).toFixed(2).replace('.',',')}`

// Maps sucessivos
resultado = nums.map(somaDez).map(triplo).map(paraDinheiro)
console.log(resultado)