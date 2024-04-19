const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Digite um número: "))
let num2 = parseInt(prompt("Digite outro número: "))
let num3 = parseInt(prompt("Digite mais um número: "))
let num4 = parseInt(prompt("Digite o último número: "))
console.log('=='.repeat(15))

let task1 = 25 + num1
let task2 = num2 * 3
let task3 = num3 * (12/100)
let task4 = (num1+num2+num3)

console.log(task1)
console.log(task2)
console.log(task3)
console.log(task4)