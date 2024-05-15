/* 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

const prompt = require("prompt-sync")();

let a1 = parseInt(prompt('Digite o primeiro termo da PA: '))
let r = parseInt(prompt('Digite a razão da PA: '))

let soma = 0;
let termos = []

for (i=1; i<11;i++) {
    an = a1 + (i-1)*r
    soma += an
    termos.push(an)
}

console.log(`Os termos da PA ** An = ${a1} + (n-1) x ${r} ** é: ${termos}`)
console.log('A soma destes termos é: ', soma)