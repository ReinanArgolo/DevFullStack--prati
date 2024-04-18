// Exercício 05: Calculadora usando Switch Case

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let operação = prompt('Escolha uma opção: ')

let resultado;

switch(operação){
    case '+':
        resultado = num1 + num2
        break;
    case '-':
        resultado = num1 - num2
        break;
    case '*':
        resultado = num1 * num2
        break;
    case '/':
        if (num2 === 0){
            console.log('Erro: o divisor é igual a zero!')
            resultado = undefined
            break
        } else {
            resultado = num1 / num2
            break
        }
 
}
if (resultado == undefined){
    console.log("Erro");
}else {
    console.log('Resultado: ', resultado)
}