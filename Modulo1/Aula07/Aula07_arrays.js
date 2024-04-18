// array ou Vetor

// let listacompras = Array()
// listacompras[0] = "Shampoo"
// listacompras[1] = "Condicionador"
// console.log(listacompras)

// Arrays multidimencionais ou Matriz

let lista_coisas = Array()

lista_coisas['Frutas'] = Array()
lista_coisas['Frutas'][0] = 'Morango'
lista_coisas['Frutas'][1] = 'Maçã'

lista_coisas['itensViagem'] = Array()
lista_coisas['itensViagem'][0] = 'Mala'
lista_coisas['itensViagem'][1] = 'roupas'
lista_coisas['itensViagem'][2] = 'dinheiro'
// console.log(lista_coisas) // Ativar para para testar as estruturas acima

console.log('-'.repeat(50))

// insere item ao final da array
lista_coisas['Frutas'].push('Banana');

// insere ao início do array
lista_coisas['itensViagem'].unshift('Protetor Solar')

// Exclusão no final do array
lista_coisas['itensViagem'].pop()

// Exclusão de elementos no começo do array
lista_coisas['Frutas'].shift()

// console.log(lista_coisas) // Ativar para para testar as estruturas acima

// pesquisa numa array
let listaProdutos = Array('Computador', 'Caneta', 'Chuteira', 'garrafa', 'lousa', 'lapis')

let pos = listaProdutos.indexOf('Computador') // .indexOf retorna o índice do elemento dentro da array

if(pos === -1){
    console.log('Não existe na Array!')
} else {
    console.log(`O elemento está na posição ${pos}`)
}


// ORDENAR ARRAYS
let numeros = Array(1, 7, 0 , 6, 4, 2)
console.log(numeros.sort());



