/* Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

let matrizDez = [
    [89, 32, 23, 54, 15, 22, 86, 67, 85, 63],
    [22, 84, 98, 45, 23, 58, 93, 43, 34, 16],
    [93, 31, 76, 43, 61, 35, 30, 36, 98, 31],
    [24, 9, 87, 50, 30, 41,   9, 23, 43, 29],
    [75, 70, 33, 40, 67, 39, 86, 14, 71, 83],
    [67, 29, 18, 44, 60, 58,  2, 78, 49, 73],
    [36, 73,  7, 71, 72, 72,  7,  8, 88, 23],
    [56, 80, 69, 66,  8, 43, 89, 94, 82, 50],
    [11, 48, 17, 84, 52, 72, 55, 99, 38, 64],
    [68, 53, 85, 97, 78, 46, 40, 93, 66, 49]
]


let somaDiagonalUm = 0
let somaDiagonalDois = 0

for (let l = 0; l < 10; l++){
    for (let c = 0; c < 10; c++){
        if (l < c) {
            somaDiagonalDois += matrizDez[l][c]
        }

        if (l > c) {
            somaDiagonalUm += matrizDez[l][c]
        }
    }
}

console.log(`A soma da diagonal superior a principal é: ${somaDiagonalDois}`)
console.log(`A soma da diagonal inferior a principal é: ${somaDiagonalUm}`)