/* Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

let matriz5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];

  let somaLinhaQua = 0
  let somaColunDois = 0
  let somaDiagPrin = 0
  let somaTdsElem = 0

for (i = 0; i < 5; i++) {
    for (let c = 0; c < 5; c++) {
        if (i == 3) {
            somaLinhaQua += matriz5x5[i][c]
        }

        if (c == 1) {
            somaColunDois += matriz5x5[i][1]
        }

        if (i == c) {
            somaDiagPrin += matriz5x5[i][c]
        }

        somaTdsElem += matriz5x5[i][c]
    }
}

console.log("a) Soma Linha 4: ", somaLinhaQua)
console.log("b) Soma da segunda coluna: ", somaColunDois)
console.log("c) Soma da diagonal principal: ", somaDiagPrin)
console.log("d) Soma de todos os elementos: ", somaTdsElem)