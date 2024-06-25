/* Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número. */

const isString = val => typeof val === 'string';

let obj = {
    nome: 'reinan',
    cidade: 'Teolandia',
    idade: 18,
    telefone: 123654
}

function contarStrings(objeto) {
    let contador = 0

    for (key in objeto) {
        if (typeof objeto[key] === "string") {
            contador++
        }
    }
    return contador;
}

let quantidadeDeStrings =  contarStrings(obj)
console.log(`Há ${quantidadeDeStrings} strings no objeto`)