/* Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

const matriz34 = Array()
const matriz34Multi = Array()

for (i = 0; i < 50; i++) {
    let temp = []
    for (let c = 0; c < 50; c++) {
       let num = parseInt((Math.random() * (500 - (1)) + 1).toFixed())
       temp.push(num)
    }

    matriz34.push(temp);

}

console.log(matriz34)

for(i = 0; i < matriz34.length; i++) {
    for (c = 0; c < matriz34[i].length; c++) {
        if (i == c) {
            let multi = multiplicarLinha(i, matriz34[i][c])
            matriz34Multi.push(multi)
        }
    }
}

function multiplicarLinha(li, numDiag) {
    let temp = Array()
    for (let i = 0; i < matriz34[li].length; i++) {
        numMulti = matriz34[li][i] * numDiag
        temp.push(numMulti) 
    }
    return temp
}

console.log(matriz34Multi)

