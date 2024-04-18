const prompt = require('prompt-sync')();

function calcularAreaTerreno(largura, comprimento){
    
    let area = largura * comprimento

    return area
}

let lg = prompt('Digite a largura do terreno em metros: ')
let cp = prompt('Digite o comprimento do terreno em metros: ')

// Chamar a função e passagem de parâmetros
let resultado = calcularAreaTerreno(lg, cp)

console.log(`O terreno possui ${resultado} metros quadrados!`)

// ESCOPO

// Global - permite que a variavel seja acessada em qualquer parte do codigo
let variavelGlobal;
let x = 5;
let y = -2;

// Função - apenas dentro da função.
function variavelF (var1, var2){
    let variavelFuncao = var1 + var2 // Função
    return variavelFuncao;
}

variavelGlobal = variavelF(x,y); // Global

// Bloco - variaveis dentro de blocos como if, for, while...
if (variavelGlobal > 0){
    let maior = true //Bloco
    if (maior){
        console.log('OK')
    }
}