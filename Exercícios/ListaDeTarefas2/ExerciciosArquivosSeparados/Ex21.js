/* Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

const prompt = require("prompt-sync")();

let alt = parseFloat(prompt('Digite a altura desta pessoa: '))
let sexo = prompt('Digite o Sexo desta pessoa: ')

pesoIdeal = calcularPesoIdeal(alt, sexo);

function calcularPesoIdeal (altura, sexo) {
    let pesoIdeal
    if (sexo == 'm' || sexo == 'M') {
        pesoIdeal = 72.7*altura - 58; 
    }

    if (sexo == 'f' || sexo == 'F') {
        pesoIdeal = 62.1 * altura - 44.7; 
    }

    return pesoIdeal
}

console.log('O peso ideal para esta pessoa é: ', pesoIdeal)