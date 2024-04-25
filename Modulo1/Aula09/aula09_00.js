const pessoa = {
    nome: 'Reinan',
    idade: 18,
    profissão: 'Desenvolvedor',
    empregada: true
}

console.log(pessoa)

delete pessoa.empregada

console.log(pessoa)

pessoa.falar = function() {
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos de idade e sou ${this.profissão}`
}

console.log(pessoa.falar())