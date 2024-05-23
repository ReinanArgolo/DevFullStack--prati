let matrizM = [
    [47, -86, 31, -17, 59, 38, 96, -76],
    [-29, -63, 79, 92, -44, 8, 70, -22],
    [-85, -93, 56, -94, -36, -82, -10, 20],
    [46, 15, 8, -28, 53, -67, -57, 3],
    [84, -91, -39, -23, -94, -52, 25, -40],
    [-62, 40, 9, 5, 48, 100, 61, 7]
]

let posiQuantNegativos = []
matrizM.forEach(linha => {
    let quantidadeNegativos = 0
    linha.forEach(valor => {
        if (valor < 0) {
            quantidadeNegativos++
        }
    });
    posiQuantNegativos.push(quantidadeNegativos)
});

console.log(`A quantidade de números negativos em cada linha é: ${posiQuantNegativos}`)