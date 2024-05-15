const prompt = require("prompt-sync")();

/* Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */

let numeros = [];

for (i=0; i < 10; i++){
    let num = parseInt(prompt('Digite um número: '))
    numeros.push(num);
}

let numerosPares = [];

numeros.forEach(numero => {
    if (numero % 2 == 0) {
        numerosPares.push(numero)
    }
});

console.log("Os números digitados foram: ", numeros)
console.log("Os números pares digitados foram: ", numerosPares)
