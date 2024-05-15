//EXERCÍCIO 04
/* Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

function verificarTriangulo (l1, l2, l3){
    if (l1 < (l2+l3) && l2 < (l1+l3) && l3 < (l1 +l2)) {
        console.log('É possível formar um triângulo!')
    } else  {
        console.log('Não é possível formar um triângulo!')
    }
}

verificarTriangulo(12, 18, 10)