/* Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */


const dados = {
    nome: 'Reinan Lopes Argolo',
    habilidades: ['lindo', 'inteligente', 'amoroso'],
    cursos: ['Dev FullStack - MaisPraTi', 'Python - Gustavo Guanabara', 'Back-end JAVA - ADATech'],
    setor: 'Desenvolvimento de Software'
}

let objFiltrado = {}
for (let prop in dados) {
    if(Array.isArray(dados[prop])) {
        objFiltrado[prop] = dados[prop];
    }
}

console.log(objFiltrado)

function filtrarDados(dados) {
    let objFiltrado = {}
    for (let prop in dados) {
        if(Array.isArray(dados[prop])) {
            objFiltrado[prop] = dados[prop];
        }
    }
    return objFiltrado
}
