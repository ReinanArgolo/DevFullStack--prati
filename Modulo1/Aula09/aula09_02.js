// percorrer objeto

const pessoa = {
    nome: 'Reinan',
    idade: 18,
    profissão: 'Desenvolvedor',
    empregada: true
}

for(let chave in pessoa){ // for in - dentro do JS itera sobre todas as propriedades enumeraveis do objeto
    console.log(chave + ': '+ pessoa[chave])
}

// for of 
let numeros = [10, 20, 100]
for(num of numeros){ // for of - dentro do JS ele itera sobre os valores do objeto
    console.log(num)
}

/* 

*/

const carros = [
    {
        modelo: 'Strada',
        ano: 2006,
        cor: 'vermelha',
        kms: 19000
    },
    {
        modelo:  'Corolla',
        ano: 2019,
        cor: 'prata',
        kms: '1200'
    } 
]

for(let dados in carros){
   console.log(carros[dados])
}

for(const carro of carros){
    console.log(`Modelo do veículo: ${carro.modelo}`)
}


/*  FOR IN - chave retorna o indice de um array ou o atributo de um objeto
    FOR OF - chave retorna os atributos de um objetos ou os valores de um array
    FOR Each - ele executa um elemnto pra casa elemento de um array */

let cores = ['Azul', 'Preto', 'Branco']
cores.forEach((cor, indice) => {
    console.log(indice + ': ' + cor)
}) 

/* Construa um array de números e calcule a soma total dos números e também imprima 
    cada número multiplicado por dois. */

let soma = 0
let numeros1 = [1, 4, 6, 8]
numeros1.forEach((num) => {
    soma += num
    console.log(`${num} * 2 = ${num*2}`)
})
console.log(soma)

// design pattern

let BikeFactory = function(cor, marca, tipo) {
    return {
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = BikeFactory('Azul', 'Speed', 'Caloi')
let bicicleta2 = BikeFactory('Preta', 'Moutain', 'BMX')

console.log(bicicleta1)
console.log(bicicleta2)