/* Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */
const prompt = require("prompt-sync")();
let contador = 0;
let soma = 0;
let media = 0;
let menor;
let pares = 0;

let condicaoDeParada = 'S'
do { 

    let numero = parseInt(prompt('Digite um valor: '))
    soma += numero;

    if (contador == 0) {
        menor = numero;
    } else {
        if (numero < menor) {
            menor = numero
        }
    }

    media = soma / (contador+1);

    if(numero % 2 == 0){
        pares ++
    }
    condicaoDeParada = prompt('Deseja continuar? [S/N]')

    contador++

} while (condicaoDeParada == 'S'|| condicaoDeParada == 's')

console.log("----------RESUMO----------")
console.log("A soma dos valores digitados é: ", soma)
console.log("O menor valor digitado foi: ", menor)
console.log("A média dos valores digitados é: ", media)
console.log("A quantidade de números pares digitados foi: ", pares)