const professor = {
    nome: 'Tony Stark',
    materia: 'Matemática',
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}

somaNotas = 0
numAlunos = 0
for(const nota in professor.notas){
    somaNotas += professor.notas[nota]
    numAlunos++
}

let media = somaNotas/numAlunos
console.log(`A média das notas é ${media.toFixed(2)}`)
console.log(media >= 3 ? `A sala do professor ${professor.nome} está acima da média` : 'A turma está abaixo da média')