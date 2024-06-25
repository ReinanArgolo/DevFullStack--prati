/* Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

let gabarito =  Array()
let apostas =  Array()

for (i = 0; i < 13; i++) {
    let num = parseInt((Math.random() * (5 - (1)) + 1).toFixed())
    gabarito.push(num)
}

for (let i = 0; i < 100; i++) {
    let tempApt = []
    for (let l = 0; l < 13; l++) {
        let num = parseInt((Math.random() * (5 - (1)) + 1).toFixed())
        tempApt.push(num)
    }
    apostas.push(tempApt)
}

for (i = 0; i < apostas.length; i++) {
    gabarito = gabarito.sort(compararNum)
    let aposta = apostas[i].sort(compararNum)
    let acertos = 0

    for (a = 0; a < aposta.length; a++) {
        if (aposta[a] == gabarito[a]) {
            acertos++
        }
    }
        console.log('-'.repeat(10))
        console.log(`O Jogador nº ${i} teve ${acertos} acertos!`)

    if (acertos == 13) {
        console.log(`Parabéns você foi o GANHADOR!`)
    }
}



function compararNum (a,b) {
    return a - b
}