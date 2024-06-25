/* Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

const prompt = require("prompt-sync")();

let vetor = Array();

for (i = 0; i < 6; i ++) {
    let value = parseInt(prompt('Digite um valor: '))
    vetor.push(value)
}

console.log('___________________________\n\n 1 - SOMAR ELEMENTOS \n 2 - PRODUTO DOS ELEMENTOS \n 3 - MÉDIA DOS ELEMENTOS \n 4 - ORDENE OS ELEMENTOS EM ORDEM CERSCENTE \n 5 - MOSTRAR VETOR\n___________________________')

let escolha = parseInt(prompt('Digite a opção desejada: '))

switch (escolha) {
    case 1:
        somarElemntos()
        break;
    
    case 2:
        calcularProduto()
        break

    case 3:
        calcularMedia()
        break

    case 4:
        ordenarElementos()
        break

    case 5:
        mostrarElementos()
        break
}

function somarElemntos() {
    let soma = 0
    vetor.forEach(num => {
        soma += num
    });

    console.log('A Soma dos elementos é:', soma)
}

function calcularProduto() {
    let produto = 0;
    vetor.forEach(num => {
        if (produto == 0) {
            produto = num
        } else {
            produto *= num
        }
    });

    console.log('O Produto dos elementos é: ', produto)
}

function calcularMedia() {
    let soma = 0
    vetor.forEach(num => {
        soma += num
    });

    let media = soma / vetor.length

    console.log('A média dos elementos é: ', media)
}

function ordenarElementos() {
    vetor.sort((a,b) => a-b);
    console.log('O velor ordenado é igual a: ', vetor)
}

function mostrarElementos() {
    console.log(vetor)
}