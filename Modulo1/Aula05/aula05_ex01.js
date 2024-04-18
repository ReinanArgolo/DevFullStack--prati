// Exercício 1: Par ou ímpar
const prompt = require('prompt-sync')();

function dado(escolha){
    if (escolha % 2 === 0){
        console.log(`O número ${escolha} é par!`)
    } 
    else {
        console.log(`O número ${escolha} é impar!`)
    }
}

escolhaDoUsuário = parseInt(prompt("Digite um número: "))
dado(escolhaDoUsuário)