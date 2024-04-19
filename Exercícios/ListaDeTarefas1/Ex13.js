const prompt = require("prompt-sync")();

for(i=0; i<5; i++){
    let num = parseFloat(prompt('Digite um número: '));
    for(i=1; i<=num; i++){
        let multiplicação = i * num
        console.log(`${i} x ${num} = ${multiplicação}`);
    }
}

