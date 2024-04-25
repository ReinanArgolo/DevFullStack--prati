let soma = 0
let numeros1 = [1, 4, 6, 8]
numeros1.forEach((num) => {
    soma += num
    console.log(`${num} * 2 = ${num*2}`)
})
console.log(soma)