/* Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */

const prompt = require("prompt-sync")();

let mA = [[], [], [], [],[],[],[]]

for (let c = 0; c < 6; c++) {
    for (let n = 0; n < 6; n++){
        num = (Math.random() * (100 - (1)) + 1).toFixed()
        mA[c][n] = num
    }
}

console.table(mA)

let value = parseInt(prompt('Digite um valor escalar: '))

let mE = [[], [], [], [],[],[],[]]

for (let c = 0; c < mA.length - 1; c++) {
    for (l = 0; l < mA.length - 1; l++) {
        mE[c][l] = mA[c][l] * value
    }
}
       
console.table(mE)
    



