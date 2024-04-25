// Exercitando arrays e funções

// Exercício 1: Somar todos os elementos de um array

let elementos = [1, 2, 3, 4, 33]

function somaElementos(vetor){
    let soma = 0 
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma
}

console.log(`A soma dos elementos é: ${somaElementos(elementos)}`)

// Exercício 02: Encontrar o maior número de um Array

function maiorNumero(vetor){
    let maior = 0

    for(i=0; i < vetor.length; i++) {
        
        if (vetor[i] > maior) {
            maior = vetor[i]
        }

    }

    return maior
}

console.log(`O maior número neste array é: ${maiorNumero(elementos)}`)

// Exercício 03: reverter um array

function reverterArray(vetor){
    let invertida = []
    for(let i = vetor.length-1; i >= 0; i--){
        invertida.push(vetor[i])
    }
    return invertida
}
console.log(reverterArray(elementos))

// somar todos os elementos de uma matriz

let matrizP = Array(1, 2)
matrizP[1] = [3, 4, 12, 5]
matrizP[2] = [6, 7, 13, 10]

function somaMatriz(vetor){
    let soma = 0
    for(i = 0; i < vetor.length; i++){
        for(let e = 0; e < vetor[i].length; e++){
            soma += vetor[i][e]
        }
    }
return soma
}
console.log(somaMatriz(matrizP))

// Exercício 2: Encontrar o maior número em uma matriz

function maiorMatriz(vetor){
    let maior = vetor[1][0]
    for(let i = 0; i < vetor.length; i++){
        for(let e = 0; e < vetor[i].length; e++){
            if(vetor[i][e] > maior){
                maior = vetor[i][e]
            }
        }
    }
    return maior
}

console.log('maior', maiorMatriz(matrizP))