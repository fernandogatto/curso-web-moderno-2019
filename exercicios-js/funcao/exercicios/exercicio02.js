/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo)
*/

function classificarTriangulo(l1, l2, l3) {
    if(l1 == l2 && l2 == l3){
        return 'Equilátero'
    } else if (l1 == l2 || l2 == l3 || l1 == l3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificarTriangulo(2, 2, 2));
console.log(classificarTriangulo(2, 3, 3));
console.log(classificarTriangulo(2, 3, 4));