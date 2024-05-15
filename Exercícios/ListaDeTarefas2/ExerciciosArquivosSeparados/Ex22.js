/* A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00 */

const prompt = require("prompt-sync")();

continuar = true

arraySalarios = []
arrayQuntFilhos = []

while (continuar) {
    
    console.log('-'.repeat(13))
    coletarDados()

    inserirMaisDados = (prompt('Deseja continuar? '))
    if (inserirMaisDados == 'n' || inserirMaisDados == 'N') {
        continuar = false
    }
    
}

function coletarDados() {
    salarioHabitante = parseFloat(prompt('Digite o salário do Habitante: '))
    arraySalarios.push(salarioHabitante)

    quantidadeFilhos = parseInt(prompt('Quantos filhos esse habitante possui: '))
    arrayQuntFilhos.push(quantidadeFilhos)

}

analisarDados(arraySalarios, arrayQuntFilhos)

function analisarDados(salarioHabitante, quantidadeFilhos) {
    mediaSalario = calcularMediaSalario(salarioHabitante)
    mediaFilhos = calcularMediaFilhos(quantidadeFilhos)
    percentualSalarios = verificarSalarios(arraySalarios)

    console.log('-'.repeat(7), 'RESULTADO DO CENSO', '-'.repeat(7))
    
    console.log(`A média do salario desta cidade é: R$${mediaSalario}`)
    console.log(`A média de filhos dessa cidade é de: ${mediaFilhos}`)
    console.log(`O percentual de salários abaixo de R$300,00 equivale a ${percentualSalarios}%`)
}

function calcularMediaSalario(salarioHabitante) {
    let somaSalario = 0

    salarioHabitante.forEach(Salario => {
        somaSalario += Salario
    });

    let media = somaSalario/salarioHabitante.length
    return media.toFixed(2)
}

function calcularMediaFilhos(quantidadeFilhos) {
    let somaQuantidadeFilhos = 0

    quantidadeFilhos.forEach(valor => {
        somaQuantidadeFilhos += valor
    });

    let media = somaQuantidadeFilhos/quantidadeFilhos.length
    return Math.round(media)

}

function verificarSalarios (salarios) {
    let contagem = 0

    
    salarios.forEach(salario => {
        if (salario < 300) {
            contagem++
        }
    });

    percentual = (contagem/salarios.length)*100
    
    return percentual
}