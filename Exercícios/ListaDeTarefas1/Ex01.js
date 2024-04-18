// Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.

const prompt = require("prompt-sync")()

let temperaturaEmCelsius = prompt("Digite a temperatura em Cº: ")

let temperaturaEmFahrenheit = (temperaturaEmCelsius * 1.8 + 32).toFixed()
console.log(`${temperaturaEmCelsius} Cº em Fahrenheit é ${temperaturaEmFahrenheit} fº`)
