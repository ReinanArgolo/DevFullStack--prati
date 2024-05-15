/* Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */

const prompt = require("prompt-sync")();

let salarioHomens = 0;
let salarioMulheres = 0;
let condicaoDeParada = 'S';

while (condicaoDeParada == 'S' || condicaoDeParada == 's') {
    let salarioFuncionario = parseInt(prompt('Digite o salário do Funcionario: '))
    let sexoFuncionario = prompt('Digite o sexo do funcionário [M/F]: ')

    somarSalario(salarioFuncionario, sexoFuncionario)

    condicaoDeParada = prompt('Deseja continuar? [S/N]: ')
}

function somarSalario (salario, sexo) {
    if (sexo == 'M' || sexo == 'm') {
        salarioHomens += salario;
    } else if (sexo == 'F' || sexo == 'f'){
        salarioMulheres += salario;
    } else {
        console.log('Sexo inválido. Valor não computado')
    }
    
}
console.log('-'.repeat(17), 'RELATÓRIO', '-'.repeat(17))
console.log(`A soma dos salários pago aos homens é: R$${salarioHomens}`)
console.log(`A soma dos salários pago as mullheres é: R$${salarioMulheres}`)
