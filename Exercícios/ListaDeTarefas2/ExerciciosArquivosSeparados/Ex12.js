/* Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

let a1 = 1
let a2 = 1
let a3 = 0;
let sequencia = [a1, a2];

for(i=0; sequencia.length < 10; i++) {
    a3 = a1 + a2
    sequencia.push(a3)
    
    a1 = a2
    a2 = a3
}

console.log(`Sequencia de fibonacci: ${sequencia}`)