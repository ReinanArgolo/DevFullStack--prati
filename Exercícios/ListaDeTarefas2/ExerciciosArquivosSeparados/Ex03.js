const prompt = require("prompt-sync")();
/* Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

function calcularValor (kms){
    let valorPassagem;
    if (kms<=200){
        valorPassagem = kms * 0.50
    } else {
        valorPassagem = kms * 0.45
    }
    return valorPassagem
}

console.log('-'.repeat(5), 'ROTA TRANSPORTES', '-'.repeat(5))
let kmsRodados = prompt('Quantos quilometros o passageiro vai percorrer? ')
console.log(`A sua passagem custou: R$${calcularValor(kmsRodados)}`)