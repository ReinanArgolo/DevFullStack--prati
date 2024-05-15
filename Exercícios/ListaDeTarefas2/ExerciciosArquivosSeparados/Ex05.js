const prompt = require("prompt-sync")();

let player = 0
let computador = 0

while(player < 3){

    console.log('- - '.repeat(5), 'JoKenPô', '- - '.repeat(5))
    console.log('0 - pedra | 1 - papel | 2 - tesoura \nOU qualquer número maior para encerrar!')

    computador = Math.floor(Math.random() * (3))
    player = parseInt(prompt('Escolha um número: '))

    if (player > 2 || player < 0){
        break
    }

    JoKenPo(player, computador)
    console.log(`Você jogou ${escolhaString(player)} e o computador jogou ${escolhaString(computador)}`)
    console.log(' ')
}

function JoKenPo (escolhaJogador, escolhaPC) {
    if (escolhaJogador == escolhaPC){

        console.log('EMPATE!')

    } else if ((escolhaJogador == 0 && escolhaPC == 1) || (escolhaJogador == 1 && escolhaPC == 2) || (escolhaJogador == 2 && escolhaPC == 0) ){
        
        console.log('O computador ganhou!')

    } else {
        
        console.log('Parabéns você ganhou!')
    
    }
}

function escolhaString (escolha) {
    let stringPlayer;
    switch (escolha){
        case 0: 
            stringPlayer = 'Pedra'
            break

        case 1:
            stringPlayer = 'Papel'
            break
        
        case 2: 
            stringPlayer = 'Tesoura'
            break
    }
    return stringPlayer
}