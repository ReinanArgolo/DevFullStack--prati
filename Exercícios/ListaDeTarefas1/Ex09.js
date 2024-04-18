const prompt = require("prompt-sync")();

let codigo = parseInt(prompt('Digite o código do produto: '));

let localidade;

if(codigo == 1){
    localidade = 'Sul'
}

if(codigo == 2) {
    localidade = 'Norte'
}

if(codigo == 3){
    localidade = 'Leste'
}

if(codigo == 4){
    localidade = 'Oeste'
}

if(codigo == 5 || codigo == 6 || (codigo >= 25 && codigo <= 50)) {
    localidade = 'Nordeste'
}

if(codigo == 7 || codigo == 8 ||codigo == 9){
    localidade = 'Sudeste';
}
if(codigo >= 10 && codigo <= 20){
        localidade = 'Centro-Oeste';
}

if (localidade == undefined){
    localidade = 'Produto importado!'
}

console.log(localidade)