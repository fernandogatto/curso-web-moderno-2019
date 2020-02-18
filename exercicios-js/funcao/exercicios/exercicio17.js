function verificarAumentoSalario(plano, salario) {
    if(plano == 'a' || plano == 'A') {
        salario = salario * 1.1
    } else if(plano == 'b' || plano == 'B') {
        salario = salario * 1.15
    } else if(plano == 'c' || plano == 'C') {
        salario = salario * 1.2
    }
    console.log(salario)
}

verificarAumentoSalario('A', 1000)
verificarAumentoSalario('B', 1000)
verificarAumentoSalario('C', 1000)