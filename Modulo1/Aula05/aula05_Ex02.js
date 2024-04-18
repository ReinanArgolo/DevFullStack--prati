// Exercício 2: Maior de dois numeros

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Insira o primeiro número: "))
let num2 = parseInt(prompt("Insira o segundo número: "))

if(num1 > num2){
    console.log("O primeiro numero é maior")
} else if (num1 < num2){
    console.log("O segundo número é maior")
} else {
    console.log("Os números são iguais")
}