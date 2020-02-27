const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // client

// Desafio 1: Achar a mulher chinesa com menor salario

const chineses = funcionario => funcionario.pais == 'China'
const mulheres = funcionario => funcionario.genero == 'F'
const menorSalario = function(funcionario, funcionarioAtual) {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

// get request
axios.get(url).then(response => {
    const funcionarios = response.data

    const resultado = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(resultado)
})