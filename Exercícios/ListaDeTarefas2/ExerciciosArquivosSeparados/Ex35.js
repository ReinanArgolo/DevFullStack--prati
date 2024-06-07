/* Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */

let matrizex35 = Array()
let pares = Array()
let impares = Array()
for (i = 0; i < 30; i++) {
       let num = parseInt((Math.random() * (100 - (1)) + 1).toFixed())
       matrizex35.push(num)
}

matrizex35.forEach(numb => {
    if(numb % 2 == 0) {
        inserirPar(numb)
    } else {
        inserirImpar(numb)
    } 
});

imprimirPares()
imprimirImpares()

function inserirPar(numb) {
    if (pares.length < 5){
        pares.push(numb)
    } else {
        imprimirPares()
        pares = []
        pares.push(numb)
    }
}

function inserirImpar(numb) {
    if (impares.length < 5) {
        impares.push(numb)
    } else {
        imprimirImpares()
        impares = []
        impares.push(numb)
    }
}

function imprimirPares() {
    console.log(`Numeros Pares: ${pares}`)
}

function imprimirImpares() {
    console.log(`Numeros Impares: ${impares}`)
}

