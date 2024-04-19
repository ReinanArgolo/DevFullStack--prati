const prompt = require("prompt-sync")();

let quantidadeDeMaçãs = parseInt(prompt('Digite a quantidade de maçãs compradas pro este cliente: '));

let preçoTotal;
if(quantidadeDeMaçãs <= 12){
    preçoTotal = quantidadeDeMaçãs * 0.30;
} else{
    preçoTotal = quantidadeDeMaçãs * 0.25;
}

console.log(`Preço Final da compra: R$${preçoTotal.toFixed(2)}`)