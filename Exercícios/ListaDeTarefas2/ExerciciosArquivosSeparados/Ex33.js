/* Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */
let matrizEx33 = [[], [], []]

for (i=0; i<3; i++) {
    for (c=0; c<3; c++){
        let num = parseInt((Math.random() * (10 - (1)) + 4).toFixed(4))
        matrizEx33[i][c] = num
    }
}

console.log('Matriz: ' ,matrizEx33)

let mediaDiagSec = (matrizEx33[0][2] + matrizEx33[1][1] + matrizEx33[2][0]) / 3

console.log('Média da diagonal: ', mediaDiagSec)

let matrizMult = []

for (i=0; i<3; i++) {
    for (c=0; c<3; c++){
        if ( i == c) {
            let mult = matrizEx33[i][c] * mediaDiagSec
            matrizMult.push(mult)
        }
    }
}



console.log('Resultado: ', matrizMult)