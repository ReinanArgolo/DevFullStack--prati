const prompt = require("prompt-sync")();

/*

Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. 
Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

*/

let quantidadeCigarrosPorDia = parseInt(prompt("Quantos cigarros você consome por dia? "))
let anosFumados = parseInt(prompt("Você fuma a quantos anos? "))

function calcularDiasPerdidos (cigarros, anos){
    let minutosPorDia = cigarros * 10
    let anosEmDias = anos * 365
    let diasPerdidos = ((minutosPorDia * anosEmDias) / 1440)

    return diasPerdidos
}

console.log(`Você perdeu ${Math.round(calcularDiasPerdidos(quantidadeCigarrosPorDia, anosFumados))} anos de vida!`)
