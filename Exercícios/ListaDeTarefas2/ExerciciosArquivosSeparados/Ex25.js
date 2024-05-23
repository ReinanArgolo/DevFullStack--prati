/* Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */

let matriz = [ [], [], [], [], [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[] ]

for (let m = 0; m < 20; m++) {
    for (let n = 0; n < 20; n++){
        num = (Math.random() * (100 - (-100)) + -100).toFixed(4)
        matriz[m][n] = num
    }
console.log(`[${matriz[m]}]`)
}

let contagemLinha = 0
matriz.forEach(linha => {
    
    let somaLinha = 0

    linha.forEach(valor => {
        somaLinha =+ valor
    });

    console.log(`A soma dos valores da linha ${contagemLinha} é: ${somaLinha}`)
    contagemLinha++
});