/* Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */

const prompt = require("prompt-sync")();

let dadosFuncionarios = [
    {
        nome: '',
        cargo: '',
        salario: 0
    }
]

dadosFuncionarios.forEach(dado => {
    dado.nome = prompt('Digite o nome do funcionário: ')
    dado.cargo = prompt('Digite o cargo do funcionário: ')
    dado.salario = prompt('Digite o salário do funcionário: ')

    console.log('Nome: ', dado.nome)
    console.log('Cargo: ', dado.cargo)
    console.log('Salário: ', dado.salario)
});
