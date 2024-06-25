/* Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades */

const inventarioLojaA = {
    notebook: 3,
    celular: 6,
    ventilador: 19,
    hd: 2
}

const inventarioLojaB = {
    notebook: 2,
    lavadora: 7,
    secador: 4,
    celular: 6,
    ventilador: 19,
    hd: 2
}

const inventarioTotal = {

}

function combinarInventario(object1, object2) {
    for (const key in object1) {
        if(key in inventarioTotal) {
            inventarioTotal[key] += object1[key]
        } else {
            inventarioTotal[key] = object1[key]
        }
    }

    for (const key in object2) {
        if(key in inventarioTotal) {
            inventarioTotal[key] += object2[key]
        } else {
            inventarioTotal[key] = object2[key]
        }
    }
}

combinarInventario(inventarioLojaA, inventarioLojaB)
console.log(inventarioTotal)
