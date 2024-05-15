/* Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */
const prompt = require("prompt-sync")();

let listaNomes = [];
let listaIdades = [];

for (i=0; i < 9; i++){
    let nome = prompt(`Digite o nome da ${i+1}º pessoa: `);
    listaNomes.push(nome);
    idade = parseInt(prompt(`Digite a idade da ${i+1}º pessoa: `));
    listaIdades.push(idade);
}

console.log('----- LISTA DE MENORES DE IDADE -----')
let pos = 0;
listaIdades.forEach(idade => {
    if (idade < 18) {
        console.log(`${listaNomes[pos]} - ${idade} anos`)
    }
    pos++    
});