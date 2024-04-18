const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite o número que deseja ver a variável: '));
for(i=0; i<=10; i++){
    console.log(`${num1} * ${i} = ${num1*i}`)
}