const prompt = require("prompt-sync")();

/* Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

listaRandNumb  = []; 

for (i=0; i < 20; i++) {
    numeroAleatorio = Math.floor(Math.random() * (99 - 0 + 1)) + 0
    listaRandNumb.push(numeroAleatorio)
}

console.log("Array de numeros aleatórios: ", listaRandNumb)


function ordenarArray(lista) {
    
    let mudou;
    let tamanhoArray = lista.length;

    for (i = 1; i < tamanhoArray; i++) {
        mudou = false;

        for (let j = 0; j < tamanhoArray - i; j++) {
        if (lista[j] > lista[j + 1]) {
            [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
            mudou = true;
        }
        }

        if (!mudou) {
        break;
        }
    }

    return lista;
}
listRandNumbOrdenada = ordenarArray(listaRandNumb)

console.log("Array de números aleatórios ordenados: ",listRandNumbOrdenada);