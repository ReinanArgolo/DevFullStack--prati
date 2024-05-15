const prompt = require("prompt-sync")();

// EXERCÍCIO 07
/* Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:

Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km

Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

console.log('- '.repeat(5), 'LOCADORA AUTOMOTIVA ARGOLO', '- '.repeat(5))

let valorFinal = 0;

console.log('1 - Carro Popular.\n2 - Carro de Luxo')
let tipoDeCarro = parseInt(prompt('Digite uma opção: '))
let dias = parseInt(prompt('Qual a quantidade de dias alugados: '))
let quilometros = parseInt(prompt('Quantidade de Kms rodados: '))

function calcularValorDoAluguel (modelo, diasAlugados, kms) {
    if (modelo == 1){
        
        valorFinal += 90 *  diasAlugados
        
        if(kms < 100) {
            valorFinal += kms * 0.20
        } else {
            valorFinal += kms * 0.10
        }

    } else if (modelo == 2) {

        valorFinal += 150 * diasAlugados
        
        if(kms < 200) {
            valorFinal += kms * 0.30
        } else {
            valorFinal += kms * 0.25
        }
    }
    return valorFinal.toFixed(2);
}

console.log('- '.repeat(8), 'Resumo','- '.repeat(8))

console.log(`Tipo de carro: ${1 ? 'Popular' : 'Luxo'}\nDias: ${dias}\nKMS rodados: ${quilometros}\n \nO valor final do aluguel será de R$${calcularValorDoAluguel(tipoDeCarro, dias, quilometros)}!`)