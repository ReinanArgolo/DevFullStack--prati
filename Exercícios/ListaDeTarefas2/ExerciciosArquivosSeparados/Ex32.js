/*  Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
 cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
 matriz lida e a modificada */

const matriz = [
    [4, 75, 8, 11, 89, 22, 74, 26, 7, 68, 54, 91, 68],
    [48, 75, 47, 54, 60, 20, 44, 53, 21, 55, 76, 82, 8],
    [58, 78, 43, 38, 18, 55, 30, 69, 76, 93, 75, 11, 36],
    [41, 53, 69, 98, 95, 95, 75, 33, 69, 80, 55, 50, 95],
    [51, 35, 36, 18, 16, 64, 12, 62, 99, 73, 98, 15, 41],
    [44, 17, 88, 39, 37, 36, 11, 29, 96, 96, 17, 59, 65],
    [90, 61, 34, 58, 65, 11, 86, 11, 88, 16, 47, 56, 59],
    [69, 90, 11, 14, 12, 11, 62, 39, 36, 92, 98, 67, 58],
    [60, 29, 25, 51, 67, 91, 18, 37, 87, 48, 12, 89, 31],
    [25, 51, 23, 28, 67, 94, 40, 43, 95, 16, 35, 98, 60],
    [9, 81, 48, 74, 50, 7, 71, 80, 21, 92, 27, 25, 62],
    [4, 22, 68, 46, 77, 78, 75, 73, 77, 23, 28, 13, 2]
];

let matrizMulti = []

function multiplicarMatriz(matriz) {
    let matrizMod = []
    let maior = Math.max(...matriz)
    for (numero of matriz) {
       let multiplicado = numero / maior
       matrizMod.push(multiplicado)
    }
    return matrizMod
}

for (pos in matriz) {
    matrizMulti.push(multiplicarMatriz(matriz[pos]))
}

console.log(matrizMulti)

for(i in matrizMulti) {
    console.log(`[${matrizMulti[i]}]`)
}