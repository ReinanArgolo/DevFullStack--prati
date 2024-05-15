/* Escreva um programa que pergunte a velocidade de um carro. 
Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. 
Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

const prompt = require("prompt-sync")();

console.log('-'.repeat(5), 'RADAR ELETRÔNICO', '-'.repeat(5));

let velocidadeCarro = prompt('Digite a velocidade do carro: ')

function radarEletronico (velocidade){
    let resultado;
    if (velocidade <= 80){
        resultado = "O Carro está dentro da velocidade permitida!"
    } else{ 
        let valorMulta = (velocidade - 80) * 5
        resultado = `O carro está acima da velocidade permitida. Uma multa de R$${valorMulta.toFixed(2)} será aplicada!`
    }
    return resultado
}
console.log(radarEletronico(velocidadeCarro))