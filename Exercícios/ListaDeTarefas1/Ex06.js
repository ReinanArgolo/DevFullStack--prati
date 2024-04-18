const prompt = require("prompt-sync")();

let ladoA = parseInt(prompt("Digite o tamanho do lado 01: "));
let ladoB = parseInt(prompt("Digite o tamanho do lado 02: "));
let ladoC = parseInt(prompt("Digite o tamanho do lado 03: "));

let tipoTriangulo;
if(ladoA + ladoB > ladoC && ladoB + ladoA > ladoC && ladoC + ladoA > ladoB){
    if(ladoA == ladoB && ladoA == ladoC){
        tipoTriangulo = 'Equilátero!'
    }
    if((ladoA == ladoB && ladoA != ladoC) || (ladoA == ladoC && ladoB != ladoA) || (ladoB == ladoC && ladoC != ladoA)){
        tipoTriangulo = 'Isóceles!'
    }
    if(ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
        tipoTriangulo = 'Escaleno!'
    }
    console.log(`É possível formar um triângulo ${tipoTriangulo}`);
} else{
    console.log('Não é possível formar um triângulo.');
}