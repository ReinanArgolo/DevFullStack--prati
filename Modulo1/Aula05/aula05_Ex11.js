const prompt = require('prompt-sync')();

let senha;

do {
    senha = prompt('Digite a senha: ')
} while (senha !== '1234')

console.log('Senha Correta!')