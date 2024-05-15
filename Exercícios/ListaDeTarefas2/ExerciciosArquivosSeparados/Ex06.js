const prompt = require("prompt-sync")();

/* Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */


const numeroSecreto = Math.floor(Math.random()*(6-1)+1)
let num;
while (num != numeroSecreto) {
    num = parseInt(prompt('Digite um número: '))
    verificarNumero(num)
}

function verificarNumero (num) {
    if (num == numeroSecreto) {
        console.log(`Parabéns você acertou, o número era ${num}`)
    } else {
        console.log('Você errou tente novamente!')
    }
}