// Exercício 04: Calculadora simples
const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("insira o primeiro número: "))
let num2 = parseFloat(prompt("insira o segundo número: "))
let operação = prompt("Escolha a operação (+, -, *, /) ");

let resultado;

if (operação === '+'){
    resultado = num1 + num2
} else if (operação === '-') {
    resultado = num1 - num2
} else if ( operação === '*'){
    resultado = num1 * num2
} else if (operação === '/'){
    if (num2 !== 0){
        resultado = num1 / num2;
    } else {
        console.log('Erro: divisão por zero')
        resultado = undefined
    } 
} else {
    console.log("Opção Invalida!")
}

if (resultado !== undefined){
    console.log("Resultado: ", resultado)
}