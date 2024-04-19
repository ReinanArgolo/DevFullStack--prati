const prompt = require("prompt-sync")();

let numero = Number(prompt('Digite um número: '));
let pesos = parseInt(prompt('Digite o Peso deste número: '))
let somaPesos = 0;
let condicao = true
somaNumPesos = numero * pesos;
somaPesos += pesos;

while(condicao){
    numero = Number(prompt('Digite um número: '));
    pesos = parseInt(prompt('Digite o Peso deste número: '));
    if (numero == 0) {
        condicao = false;
    } 
    somaNumPesos += numero * pesos;
    somaPesos += pesos;
}

let media = somaNumPesos / somaPesos;
console.log(`A média destes números é: ${media}`);