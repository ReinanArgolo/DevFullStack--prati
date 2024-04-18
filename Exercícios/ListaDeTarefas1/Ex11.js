const prompt = require("prompt-sync")();

let num = parseInt(prompt('Digite um número: '));
while(num > 0 || !isNaN(num)){
    let num = parseInt(prompt('Digite um número: '))
    if (num < 0){
        break 
    } else if (!isNaN(num % 2 != 0)) {
        console.log(`O número ${num} é ÍMPAR!`)
    } else if(!isNaN(num % 2 == 0)) {
        console.log(`O número ${num} é PAR!`)
    }
} 


