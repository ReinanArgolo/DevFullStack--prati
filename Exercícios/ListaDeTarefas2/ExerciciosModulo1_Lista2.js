const prompt = require("prompt-sync")();

// EXERCÍCIO 01
/* Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. 
Calcule quantos dias de vida um fumante perderá e exiba o total em dias. */

let quantidadeCigarrosPorDia = parseInt(prompt("Quantos cigarros você consome por dia? "))
let anosFumados = parseInt(prompt("Você fuma a quantos anos? "))

function calcularDiasPerdidos (cigarros, anos){
    let minutosPorDia = cigarros * 10
    let anosEmDias = anos * 365
    let diasPerdidos = ((minutosPorDia * anosEmDias) / 1440).toFixed(0)

    return diasPerdidos
}

console.log(calcularDiasPerdidos(quantidadeCigarrosPorDia, anosFumados))

//EXERCÍCIO 02
/* Escreva um programa que pergunte a velocidade de um carro. 
Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. 
Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

console.log('-'.repeat(5), 'RADAR ELETRÔNICO', '-'.repeat(5));

let velocidadeCarro = prompt('Digite a velocidade do carro: ')

function radarEletronico (velocidade){
    let resultado;
    if (velocidade <= 80){
        resultado = "O Carro está dentro da velocidade permitida!"
    } else{ 
        let valorMulta = (velocidade - 80) * 5
        resultado = `O carro está acima da velocidade permitida. Uma multa de R$${valorMulta.toFixed(2)} será aplicada!`
    }
    return resultado
}
console.log(radarEletronico(velocidadeCarro))

//EXERCÍCIO 03
/* Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

function calcularValor (kms){
    let valorPassagem;
    if (kms<=200){
        valorPassagem = kms * 0.50
    } else {
        valorPassagem = kms * 0.45
    }
    return valorPassagem
}

console.log('-'.repeat(5), 'ROTA TRANSPORTES', '-'.repeat(5))
let kmsRodados = prompt('Quantos quilometros o passageiro vai percorrer? ')
console.log(`A sua passagem custou: R$${calcularValor(kmsRodados)}`)

//EXERCÍCIO 04
/* Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

function verificarTriangulo (l1, l2, l3){
    if (l1 < (l2+l3) && l2 < (l1+l3) && l3 < (l1 +l2)) {
        console.log('É possível formar um triângulo!')
    } else  {
        console.log('Não é possível formar um triângulo!')
    }
}

verificarTriangulo(12, 18, 10)

//EXERCÍCIOS 05
/* Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). 
0 - pedra
1 - papel
2 - tesoura */

let player = 0
let computador = 0

while(player < 3){

    console.log('- - '.repeat(5), 'JoKenPô', '- - '.repeat(5))
    console.log('0 - pedra | 1 - papel | 2 - tesoura \nOU qualquer número maior para encerrar!')

    computador = Math.floor(Math.random() * (3))
    player = parseInt(prompt('Escolha um número: '))

    if (player > 2 || player < 0){
        break
    }

    JoKenPo(player, computador)
    console.log(`Você jogou ${escolhaString(player)} e o computador jogou ${escolhaString(computador)}`)
    console.log(' ')
}

function JoKenPo (escolhaJogador, escolhaPC) {
    if (escolhaJogador == escolhaPC){

        console.log('EMPATE!')

    } else if ((escolhaJogador == 0 && escolhaPC == 1) || (escolhaJogador == 1 && escolhaPC == 2) || (escolhaJogador == 2 && escolhaPC == 0) ){
        
        console.log('O computador ganhou!')

    } else {
        
        console.log('Parabéns você ganhou!')
    
    }
}

function escolhaString (escolha) {
    let stringPlayer;
    switch (escolha){
        case 0: 
            stringPlayer = 'Pedra'
            break

        case 1:
            stringPlayer = 'Papel'
            break
        
        case 2: 
            stringPlayer = 'Tesoura'
            break
    }
    return stringPlayer
}

//EXERCÍCIO 06
/* Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

const numeroSecreto = Math.floor(Math.random()*(6-1)+1)
let num;
while (num != numeroSecreto) {
    num = parseInt(prompt('Digite um número: '))
    verificarNumero(num)
}

function verificarNumero (num) {
    if (num == numeroSecreto) {
        console.log(`Parabéns você acertou, o número era ${num}`)
    } else {
        console.log('Você errou tente novamente!')
    }
}

// EXERCÍCIO 07
/* Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:

Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km

Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

console.log('- '.repeat(5), 'LOCADORA AUTOMOTIVA ARGOLO', '- '.repeat(5))

let valorFinal = 0;

console.log('1 - Carro Popular.\n2 - Carro de Luxo')
let tipoDeCarro = parseInt(prompt('Digite uma opção: '))
let dias = parseInt(prompt('Qual a quantidade de dias alugados: '))
let quilometros = parseInt(prompt('Quantidade de Kms rodados: '))

function calcularValorDoAluguel (modelo, diasAlugados, kms) {
    if (modelo == 1){
        
        valorFinal += 90 *  diasAlugados
        
        if(kms < 100) {
            valorFinal += kms * 0.20
        } else {
            valorFinal += kms * 0.10
        }

    } else if (modelo == 2) {

        valorFinal += 150 * diasAlugados
        
        if(kms < 200) {
            valorFinal += kms * 0.30
        } else {
            valorFinal += kms * 0.25
        }
    }
    return valorFinal.toFixed(2);
}

console.log('- '.repeat(8), 'Resumo','- '.repeat(8))

console.log(`Tipo de carro: ${1 ? 'Popular' : 'Luxo'}\nDias: ${dias}\nKMS rodados: ${quilometros}\n \nO valor final do aluguel será de R$${calcularValorDoAluguel(tipoDeCarro, dias, quilometros)}!`)


// EXERCÍCIO 08
/* Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:

- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)

Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

let horasPorMes = parseInt(prompt('Digite a quantidade de horas de exercício deste mês: '))

converterHorasEmPontos(horasPorMes)

function converterHorasEmPontos (horas) {
    
    let pontos;
    if (horas <= 10) {    
        pontos = horas * 2
    } else if (horas > 10 && horas <= 20) {
        pontos = horas * 5
    } else {
        pontos = horas * 10
    }
    
    console.log(`Parabés! Você conseguiu ${pontos} e ganhou R$${converterPontosEmReal(pontos).toFixed(2)}`)
}

function converterPontosEmReal (pontos) {
    let reais = pontos * 0.05
    return reais 
}

// EXERCÍCIO 09
/* Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */

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

//EXERCICIO 10
/* Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

let contador = 0;
let soma = 0;
let media = 0;
let menor;
let pares = 0;

condicaoDeParada = 'S'

do { 

    let numero = parseInt(prompt('Digite um valor: '))
    soma += numero;

    if (contador == 0) {
        menor = numero;
    } else {
        if (numero < menor) {
            menor = numero
        }
    }

    media = soma / (contador+1);

    if(numero % 2 == 0){
        pares ++
    }
    condicaoDeParada = prompt('Deseja continuar? [S/N]')

    contador++

} while (condicaoDeParada == 'S'|| condicaoDeParada == 's')

console.log("----------RESUMO----------")
console.log("A soma dos valores digitados é: ", soma)
console.log("O menor valor digitado foi: ", menor)
console.log("A média dos valores digitados é: ", media)
console.log("A quantidade de números pares digitados foi: ", pares)


// EXERCÍCIO 11
/* Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

let a1 = parseInt(prompt('Digite o primeiro termo da PA: '))
let r = parseInt(prompt('Digite a razão da PA: '))

soma = 0;
let termos = []

for (i=1; i<11;i++) {
    an = a1 + (i-1)*r
    soma += an
    termos.push(an)
}

console.log(`Os termos da PA ** An = ${a1} + (n-1) x ${r} ** é: ${termos}`)
console.log('A soma destes termos é: ', soma)

// EXERCÌCIO 12
/* Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

let t1 = 1
let t2 = 1
let t3 = 0;
let sequencia = [t1, t2];

for(i=0; sequencia.length < 10; i++) {
    t3 = t1 + t2
    sequencia.push(t3)
    
    t1 = t2
    t2 = t3
}

console.log(`Sequencia de fibonacci: ${sequencia}`)

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

// EXERCÍCIO 14
/* Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */

let arrayDeNomes = [];

for(i=0; i < 7; i++) {
    let nome = prompt('Digite um nome: ');
    arrayDeNomes.push(nome);
}

console.log(`Os nomes digitados foi: ${arrayDeNomes}`);

// EXERCÍCIO 15
/* Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */

let numeros = [];

for (i=0; i < 10; i++){
    let num = parseInt(prompt('Digite um número: '))
    numeros.push(num);
}

let numerosPares = [];

numeros.forEach(numero => {
    if (numero % 2 == 0) {
        numerosPares.push(numero)
    }
});

console.log("Os números digitados foram: ", numeros)
console.log("Os números pares digitados foram: ", numerosPares)

//EXERCÍCIO 16
/* Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

listaRandNumb  = []; 

for (i=0; i < 20; i++) {
    numeroAleatorio = Math.floor(Math.random() * (99 - 0 + 1)) + 0
    listaRandNumb.push(numeroAleatorio)
}

console.log("Array de numeros aleatórios: ", listaRandNumb)


function ordenarArray(lista) {
    
    let mudou;
    let tamanhoArray = lista.length;

    for (i = 1; i < tamanhoArray; i++) {
        mudou = false;

        for (let j = 0; j < tamanhoArray - i; j++) {
        if (lista[j] > lista[j + 1]) {
            [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
            mudou = true;
        }
        }

        if (!mudou) {
        break;
        }
    }

    return lista;
}
listRandNumbOrdenada = ordenarArray(listaRandNumb)

console.log("Array de números aleatórios ordenados: ",listRandNumbOrdenada);

//EXERCÍCIO 17
/* Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */

let listaNomes = [];
let listaIdades = [];

for (i=0; i < 9; i++){
    let nome = prompt(`Digite o nome da ${i+1}º pessoa: `);
    listaNomes.push(nome);
    idade = parseInt(prompt(`Digite a idade da ${i+1}º pessoa: `));
    listaIdades.push(idade);
}

console.log('----- LISTA DE MENORES DE IDADE -----')
let pos = 0;
listaIdades.forEach(idade => {
    if (idade < 18) {
        console.log(`${listaNomes[pos]} - ${idade} anos`)
    }
    pos++    
});

//EXERCÍCIO 18
/* Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */

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

// EXERCÍCIO 19
/* Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS. */

solicitarHorarios();

function solicitarHorarios() {
    for (i=0; i<5;i++) {
        console.log(`\nHorário ${i+1}\n`)
        let hora = parseInt(prompt('Hora: '))
        let minuto = parseInt(prompt('Minutos: '))
        let segundo = parseInt(prompt('Segundos: '))

        validarHorarios(hora, minuto, segundo)
}
}

function validarHorarios(hora, minuto, segundo) {
    let horarios = []
    
    if (hora > 23) {
        console.log('Horario inválido!')
        horarios.push('00')
        horarios.push('00')
        horarios.push('00')
    } else {
        horarios.push(hora)
    }

    if (minuto > 59) {
        console.log('Horario inválido!')
        horarios[0] = '00'
        horarios.push('00')
        horarios.push('00')
    } else {
        horarios.push(minuto)
    }

    if (segundo > 59) {
        console.log('Horario inválido!')
        horarios[0] = '00'
        horarios[1] ='00'
        horarios.push('00')
    
    } else {
        horarios.push(segundo)
    }

    imprimirHora(horarios)
}

function imprimirHora(arrayDeHorarios) {
    console.log(`${arrayDeHorarios[0]}:${arrayDeHorarios[1]}:${arrayDeHorarios[2]}`)
}

// EXERCÍCIO 20
/* Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS). */

const funcionarios = [];


function gerarFuncionario() {
  const matricula = Math.floor(Math.random() * 100000) + 1; 
  const nome = `Nome Aleatório ${matricula}`; 
  const salarioBruto = (Math.random() * 4000 + 1500).toFixed(2);
  
  return {
    matricula: matricula,
    nome: nome,
    salarioBruto: salarioBruto,
  };
}

for (let i = 0; i < 80; i++) {
  funcionarios.push(gerarFuncionario());
}

function calcularDeducaoINSS (salarioBruto){
    let deducao = (salarioBruto * 0.12).toFixed(2)
    return deducao
}

let id = 1;
funcionarios.forEach(funcionário => {
    console.log('-'.repeat(6), `Funcionário ${id}`, '-'.repeat(6))    

    console.log('Matrícula: ', funcionário.matricula)
    console.log('Nome: ', funcionário.nome)
    console.log('Salário Bruto: ', funcionário.salarioBruto)
    let deducaoINSS = calcularDeducaoINSS(funcionário.salarioBruto)
    console.log('Dedução INSS: ', deducaoINSS)
    console.log('Salário líquido: ', (funcionário.salarioBruto - deducaoINSS).toFixed(2))

    id++
});

// EXERCÍCIO 21
/* Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

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

// EXERCÍCIO 22
/* A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00 */

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
    percentualSalaios = verificarSalarios(arraySalarios)

    console.log('-'.repeat(7), 'RESULTADO DO CENSO', '-'.repeat(7))
    
    console.log(`A média do salario desta cidade é: R$${mediaSalario}`)
    console.log(`A média de filhos dessa cidade é de: ${mediaFilhos}`)
    console.log(`O percentual de salários abaixo de R$300,00 equivale a ${percentualSalaios}%`)
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

matriz = [[], [], [], [], [], [], []]

for (let l = 0; l < 7; l++) {
    for (i = 0; i < 7; i++) {
        if (i == l) {
            matriz[l][i] = 1
        } else {
            matriz[l][i] = 0
        }
    }
    console.log(`[${matriz[l]}]`)
}

// EXERCCÍCIO 23
/* Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos. */

matriz = [[], [], [], [], [], [], []]

for (let l = 0; l < 7; l++) {
    for (i = 0; i < 7; i++) {
        if (i == l) {
            matriz[l][i] = 1
        } else {
            matriz[l][i] = 0
        }
    }
    console.log(`[${matriz[l]}]`)
}

// EXERCÍCIO 24
/* Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M. */

let matrizM = [
    [47, -86, 31, -17, 59, 38, 96, -76],
    [-29, -63, 79, 92, -44, 8, 70, -22],
    [-85, -93, 56, -94, -36, -82, -10, 20],
    [46, 15, 8, -28, 53, -67, -57, 3],
    [84, -91, -39, -23, -94, -52, 25, -40],
    [-62, 40, 9, 5, 48, 100, 61, 7]
]

let posiQuantNegativos = []

matrizM.forEach(linha => {

    let quantidadeNegativos = 0
    linha.forEach(valor => {
        if (valor < 0) {
            quantidadeNegativos++
        }
    });

    posiQuantNegativos.push(quantidadeNegativos)

});

console.log(`A quantidade de números negativos em cada linha é: ${posiQuantNegativos}`)

// EXERCÍCIO 25
/* Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */

let matriz = [ [], [], [], [], [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[] ]

for (let m = 0; m < 20; m++) {
    for (let n = 0; n < 20; n++){
        num = (Math.random() * (100 - (-100)) + -100).toFixed(4)
        matriz[m][n] = num
    }
console.log(`[${matriz[m]}]`)
}

let contagemLinha = 0
matriz.forEach(linha => {
    
    let somaLinha = 0

    linha.forEach(valor => {
        somaLinha =+ valor
    });

    console.log(`A soma dos valores da linha ${contagemLinha} é: ${somaLinha}`)
    contagemLinha++
});

// EXERCÍCIOS 26
/* Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */


function multiplicarMatrizes(A, B) {
   
    let P = [];
    for (let i = 0; i < A.length; i++) {
      P[i] = [];
      for (let j = 0; j < B[0].length; j++) {
        P[i][j] = 0;
      }
    }
  
    
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B[0].length; j++) {
        for (let k = 0; k < A[0].length; k++) {
          P[i][j] += A[i][k] * B[k][j];
        }
      }
    }
  
    return P;
  }
  

  let A = [
    [16, 17, 18],
    [21, 22, 23],
    [26, 27, 28],
    [31, 32, 33],
    [36, 37, 38],
  ];
  
  let B = [
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
  ]
  
  const P = multiplicarMatrizes(A, B);
  
  console.table(P);

  // EXERCÍCIO 27
  