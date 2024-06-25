/* Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos */

let obj1 = {
    destinatario: 'Carlos dos Santos',
    endereco: {
        rua: 'S. mateus',
        bairro: 'Namor Tavares',
        numero: 43
    },
    telefone: 8899007766
}

let obj2 = {
    destinatario: 'Luana dos Santos',
    endereco: {
        rua: 'S. Fervor',
        bairro: 'Namor Tavares',
        numero: 43,
        cidade: 'Santo Santos'
    },
}

function mesclarObjetos(obj1, obj2) {
    return Object.assign({}, obj1, obj2)
}

let objetoMesclado = mesclarObjetos(obj1, obj2)
console.log(objetoMesclado)