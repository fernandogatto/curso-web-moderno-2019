function calcularFatorial(numero) {
    let resultado = 1
    if(numero == 0 || numero == 1) {
        resultado = 1
    }
    while(numero > 0) {
        resultado = resultado * numero
        numero--
    }
    console.log(resultado)
}

calcularFatorial(0)
calcularFatorial(1)
calcularFatorial(2)
calcularFatorial(3)
calcularFatorial(4)
calcularFatorial(5)