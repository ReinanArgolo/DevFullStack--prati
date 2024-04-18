const prompt = require("prompt-sync")();

let primeiroNum = parseInt(prompt('Digite um núemro: '));
let segundoNum = parseInt(prompt('Digite outro núemro: '));

if(primeiroNum > segundoNum){
    console.log(segundoNum, primeiroNum);
}else {
    console.log(primeiroNum, segundoNum);
}