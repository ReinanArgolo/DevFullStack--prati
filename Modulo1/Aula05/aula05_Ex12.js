// Pedir ao usuário para adivinhar um número entre 1 e 10:
const prompt = require("prompt-sync")()

const numeroCorreto = Math.floor((Math.random()*10)+1)
let tentativa

do {
    tentativa = parseInt(prompt('Digite um valor: '))
    if (tentativa > numeroCorreto){
        console.log("O número é menor!")
    } else if (numeroCorreto > tentativa){
        console.log("O número é maior!")
    }
} while (tentativa !== numeroCorreto)

console.log("Parabéns você acertou!")
