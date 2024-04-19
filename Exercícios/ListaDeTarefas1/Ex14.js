const prompt = require("prompt-sync")();

let numero = parseFloat(prompt('Digite um número: '));
let soma = 0;
soma += numero;
let numerosDigitados = 0;

while(numero != 0){
    numero = parseFloat(prompt('Digite um número: '));
    soma += numero;
    numerosDigitados++
}

let media = soma / (numerosDigitados);
console.log(`A média destes números é: ${media}`);