/* Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

const gabarito = gerarGabarito()
const respostasAlunos = Array()

function gerarGabarito() {
    const alternativas = ['a', 'b', 'c', 'd', 'e']
    let escolhas = []

    for (let n = 0; n < 20; n++) {
        let posArray = Math.floor(Math.random() * alternativas.length)
        let escolha = alternativas[posArray]
        escolhas.push(escolha)
    }

    return escolhas

}

for(let i=0; i< 50; i++) {
    respostasAlunos.push(gerarGabarito())
}


for(i = 0; i < respostasAlunos.length; i++) {
    let resultado;
    let acertos = corrigirProva(respostasAlunos[i])
    if (acertos >= 12 ) {
        resultado = 'Aprovado!'
    } else {
        resultado = 'Reprovado!'
    }
    console.log(`Aluno nº: ${i+1} | Acertos: ${acertos} | Resultado: ${resultado}`)
}

function corrigirProva (prova) {
    let acertos = 0

    for (let p = 0; p < prova.length; p++) {
        if (prova[p] == gabarito[p]) {
            acertos++
        }
    }

    return acertos;
}