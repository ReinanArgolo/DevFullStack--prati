/* Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados */

const objetos = {
    n1: 10,
    n2: 45,
    n3: 8,
}

function aplicarAPropriedade(objetos) {
    let final = {}
    for(const chave in objetos) {
        final[chave] = objetos[chave] ** 2  
    }
    return final
}

console.log(aplicarAPropriedade(objetos))