/* Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */

const matrixEx39 = []
const vetorFiltrado =  Array();

for (let m = 0; m < 100; m++) {
    for (let n = 0; n < 100; n++) {
        num = (Math.random() * (100 - (-100)) + -100).toFixed()
        matrixEx39.push(num)
    }
}

matrixEx39.forEach(num => {
    if (num >= -0) {
        vetorFiltrado.push(num)
    }
});

console.log(`${vetorFiltrado}`)