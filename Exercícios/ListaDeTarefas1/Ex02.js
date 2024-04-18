const prompt = require("prompt-sync")();

let eleitoresTotais = parseInt(prompt("Qual a quantidade total de eleitores neste município? "));
let votosBrancos = parseInt(prompt('Insira a quantidade de votos BRANCOS: '));
let votosNulos = parseInt(prompt('Insira a quantidade de votos NULOS: '));
let votosValidos = parseInt(prompt('Insira a quantidade de votos VÁLIDOS: '));
console.log('-'.repeat(55))

let percentualBrancos = votosBrancos / eleitoresTotais * 100
console.log(`Os votos Brancos equilavem a ${percentualBrancos}% do total de eleitores.`);

let percentualNulos = votosNulos / eleitoresTotais * 100;
console.log(`Os votos Nulos equilavem a ${percentualNulos}% do total de eleitores.`);

let percentualValidos = votosValidos / eleitoresTotais * 100;
console.log(`Os votos Válidos equilavem a ${percentualValidos}% do total de eleitores.`);


