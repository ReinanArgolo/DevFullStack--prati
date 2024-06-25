/* Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */
const sorteio = []
const apostas = []

for (i = 0; i < 5; i++) {
    let num = parseInt((Math.random() * (10 - (1)) + 1).toFixed())
    sorteio.push(num)
}

for (a = 0; a < 50; a++) {
    let temp = Array()
    for (i = 0; i < 5; i++) {
        let num = parseInt((Math.random() * (10 - (1)) + 1).toFixed())
        temp.push(num)
    }
    apostas.push(temp)
}

function verificarApostas(sorteio, aposta) {
    for (l = 0; l < aposta.length; l++) {
        if(sorteio[l] !== aposta[l]) {
            return false
        }
    }
    return true
}

apostas.forEach(aposta => {
    if(verificarApostas(sorteio, aposta)) {
        console.log('Parabéns você GANHOU')
    } else {
        console.log('Você não ganhou!')
    }
    
});