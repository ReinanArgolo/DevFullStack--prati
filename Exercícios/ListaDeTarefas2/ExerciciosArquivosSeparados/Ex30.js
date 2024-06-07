/* Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. */


let matrizex30 = []
for (i = 0; i < 5; i++) {
    let temp = []
    for (let c = 0; c < 5; c++) {
       let num = parseInt((Math.random() * (100 - (1)) + 1).toFixed())
       temp.push(num)
    }

    matrizex30.push(temp);

}

console.log(matrizex30);

let sl = [0, 0, 0, 0 ,0]
let sc = [0, 0, 0, 0 ,0]

for (i=0; i < 5; i++) { 
    let somaLinha = 0;
    for (c=0; c<5; c++) {
        somaLinha += matrizex30[i][c];
        sc[c] += matrizex30[i][c]
    }   
    sl[i] = somaLinha;

}

for (i = 0; i < 5; i++) {
    console.log(`A soma da Linha  ${i} é: ${sl[i]}`)
    console.log(`A soma da Coluna ${i} é: ${sl[i]}`)
    console.log('- '.repeat(10))
}
