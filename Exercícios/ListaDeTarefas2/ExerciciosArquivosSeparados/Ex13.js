// EXERCÍCIO 13
/* Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci. */

let vetorSequencia = [1, 1];

for (i=0; vetorSequencia.length < 15; i++) {
   if (i == 0){
    novoValor = vetorSequencia[0] + vetorSequencia[1]
    vetorSequencia.push(novoValor)
   } else {
    novoValor = vetorSequencia[vetorSequencia.length-2] + vetorSequencia[vetorSequencia.length-1]
    vetorSequencia.push(novoValor)
   }

}

console.log(`Os 15 primeiros valores da sequência de Fibonacci são: ${vetorSequencia}`)
