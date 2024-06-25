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
  /* Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */

let mA = [[], [], [], [],[],[],[]]

for (let c = 0; c < 6; c++) {
    for (let n = 0; n < 6; n++){
        num = (Math.random() * (100 - (1)) + 1).toFixed()
        mA[c][n] = num
    }
}

console.table(mA)

let value = parseInt(prompt('Digite um valor escalar: '))

let mE = [[], [], [], [],[],[],[]]

for (let c = 0; c < mA.length - 1; c++) {
    for (l = 0; l < mA.length - 1; l++) {
        mE[c][l] = mA[c][l] * value
    }
}
       
console.table(mE)

//EXERCÍCIO 28
/* Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

let matrizDez = [
    [89, 32, 23, 54, 15, 22, 86, 67, 85, 63],
    [22, 84, 98, 45, 23, 58, 93, 43, 34, 16],
    [93, 31, 76, 43, 61, 35, 30, 36, 98, 31],
    [24, 9, 87, 50, 30, 41,   9, 23, 43, 29],
    [75, 70, 33, 40, 67, 39, 86, 14, 71, 83],
    [67, 29, 18, 44, 60, 58,  2, 78, 49, 73],
    [36, 73,  7, 71, 72, 72,  7,  8, 88, 23],
    [56, 80, 69, 66,  8, 43, 89, 94, 82, 50],
    [11, 48, 17, 84, 52, 72, 55, 99, 38, 64],
    [68, 53, 85, 97, 78, 46, 40, 93, 66, 49]
]


let somaDiagonalUm = 0
let somaDiagonalDois = 0

for (let l = 0; l < 10; l++){
    for (let c = 0; c < 10; c++){
        if (l < c) {
            somaDiagonalDois += matrizDez[l][c]
        }

        if (l > c) {
            somaDiagonalUm += matrizDez[l][c]
        }
    }
}

console.log(`A soma da diagonal superior a principal é: ${somaDiagonalDois}`)
console.log(`A soma da diagonal inferior a principal é: ${somaDiagonalUm}`)

//EXERCÍCIO 29
/* Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

let matriz5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];

  let somaLinhaQua = 0
  let somaColunDois = 0
  let somaDiagPrin = 0
  let somaTdsElem = 0

for (i = 0; i < 5; i++) {
    for (let c = 0; c < 5; c++) {
        if (i == 3) {
            somaLinhaQua += matriz5x5[i][c]
        }

        if (c == 1) {
            somaColunDois += matriz5x5[i][1]
        }

        if (i == c) {
            somaDiagPrin += matriz5x5[i][c]
        }

        somaTdsElem += matriz5x5[i][c]
    }
}

console.log("a) Soma Linha 4: ", somaLinhaQua)
console.log("b) Soma da segunda coluna: ", somaColunDois)
console.log("c) Soma da diagonal principal: ", somaDiagPrin)
console.log("d) Soma de todos os elementos: ", somaTdsElem)

//EXERCÍCIO 30
/* Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. */


let matrizex30 = []
for (i = 0; i < 5; i++) {
    let temp = []
    for (let c = 0; c < 5; c++) {
       let num = parseInt((Math.random() * (100 - (1)) + 1).toFixed())
       temp.push(num)
    }

    matrizex30.push(temp);

}

console.log(matrizex30);

let sl = [0, 0, 0, 0 ,0]
let sc = [0, 0, 0, 0 ,0]

for (i=0; i < 5; i++) { 
    let somaLinha = 0;
    for (c=0; c<5; c++) {
        somaLinha += matrizex30[i][c];
        sc[c] += matrizex30[i][c]
    }   
    sl[i] = somaLinha;

}

for (i = 0; i < 5; i++) {
    console.log(`A soma da Linha  ${i} é: ${sl[i]}`)
    console.log(`A soma da Coluna ${i} é: ${sl[i]}`)
    console.log('- '.repeat(10))
}

//EXERCÍCIO 31

matriz30x30 = 
[
    [93, 65, 97, 89, 40, 92, 44, 69, 18, 77, 33, 94, 79, 41, 53, 99, 45, 39, 54, 74, 49, 86, 73, 78, 66, 85, 88, 28, 68, 31],
    [55, 45, 98, 72, 36, 96, 61, 76, 23, 63, 17, 27, 46, 81, 34, 11, 84, 87, 57, 59, 60, 42, 64, 12, 70, 95, 35, 10, 38, 25],
    [58, 90, 22, 21, 56, 85, 71, 14, 47, 80, 37, 24, 48, 67, 83, 15, 75, 26, 52, 50, 78, 91, 33, 32, 55, 82, 74, 70, 31, 59],
    [62, 88, 29, 53, 66, 68, 13, 89, 72, 43, 61, 16, 51, 91, 39, 97, 77, 50, 41, 34, 38, 79, 99, 49, 83, 63, 44, 73, 95, 37],
    [25, 92, 19, 84, 58, 33, 20, 46, 27, 30, 57, 88, 35, 71, 13, 96, 62, 43, 60, 91, 24, 52, 94, 32, 17, 45, 26, 56, 67, 78],
    [99, 21, 59, 48, 28, 82, 68, 20, 64, 55, 19, 53, 49, 36, 74, 73, 90, 42, 30, 88, 37, 76, 97, 27, 61, 18, 65, 22, 85, 83],
    [56, 77, 38, 93, 29, 35, 80, 67, 44, 79, 47, 39, 12, 86, 95, 51, 16, 58, 17, 53, 75, 32, 72, 70, 31, 48, 22, 91, 84, 66],
    [41, 31, 81, 64, 11, 15, 47, 30, 13, 76, 25, 68, 21, 28, 50, 88, 95, 85, 78, 19, 52, 45, 55, 70, 83, 90, 74, 59, 94, 58],
    [69, 52, 12, 89, 10, 43, 20, 92, 82, 63, 72, 36, 71, 14, 81, 57, 29, 96, 27, 49, 46, 51, 26, 98, 86, 54, 22, 75, 19, 44],
    [75, 40, 32, 27, 56, 98, 58, 77, 90, 18, 29, 74, 94, 30, 45, 88, 60, 53, 70, 21, 49, 13, 85, 62, 55, 48, 95, 54, 12, 24],
    [62, 11, 59, 16, 35, 65, 99, 83, 50, 45, 97, 76, 40, 52, 84, 67, 19, 68, 75, 41, 86, 20, 30, 92, 89, 28, 70, 23, 37, 46],
    [42, 24, 17, 28, 74, 61, 91, 36, 31, 99, 65, 32, 18, 48, 26, 72, 79, 98, 57, 40, 63, 95, 87, 54, 85, 33, 73, 25, 69, 58],
    [50, 82, 97, 76, 54, 78, 31, 30, 20, 89, 29, 70, 41, 64, 66, 14, 55, 38, 92, 23, 59, 33, 85, 10, 47, 18, 26, 15, 52, 53],
    [90, 36, 77, 72, 56, 99, 63, 15, 11, 48, 19, 46, 50, 42, 95, 55, 32, 40, 66, 87, 74, 49, 79, 68, 37, 24, 14, 18, 93, 57],
    [84, 87, 61, 13, 88, 79, 48, 97, 45, 34, 75, 55, 71, 81, 44, 76, 59, 52, 64, 94, 31, 73, 53, 40, 35, 72, 19, 60, 24, 29],
    [22, 42, 55, 41, 34, 58, 65, 83, 16, 10, 20, 47, 69, 23, 28, 38, 75, 61, 17, 78, 27, 66, 11, 12, 53, 32, 95, 44, 91, 50],
    [60, 53, 33, 88, 21, 32, 63, 27, 79, 19, 87, 24, 10, 29, 70, 46, 83, 62, 49, 75, 44, 99, 30, 84, 96, 25, 92, 12, 37, 45],
    [46, 69, 50, 39, 80, 72, 94, 68, 84, 36, 86, 51, 22, 38, 23, 18, 64, 74, 19, 95, 21, 44, 78, 12, 47, 30, 98, 62, 13, 77],
    [38, 31, 62, 57, 83, 27, 95, 25, 85, 29, 34, 52, 43, 91, 64, 13, 30, 33, 40, 93, 73, 77, 71, 68, 14, 66, 56, 75, 53, 58],
    [54, 73, 19, 98, 70, 48, 28, 64, 11, 58, 26, 96, 80, 41, 90, 38, 42, 77, 59, 24, 12, 55, 76, 86, 25, 43, 97, 20, 92, 31],
    [59, 76, 47, 35, 44, 93, 49, 60, 32, 13, 11, 61, 88, 30, 70, 19, 89, 78, 51, 20, 21, 46, 15, 66, 23, 90, 87, 56, 67, 41],
    [21, 63, 86, 85, 94, 38, 14, 77, 48, 19, 56, 45, 92, 18, 22, 43, 10, 20, 65, 69, 41, 71, 98, 83, 58, 52, 80, 55, 37, 50],
    [43, 64, 91, 20, 87, 26, 89, 57, 25, 48, 12, 40, 11, 66, 27, 36, 78, 75, 34, 32, 94, 99, 29, 98, 96, 86, 42, 50, 37, 39],
    [35, 96, 39, 47, 46, 58, 14, 21, 25, 80, 67, 63, 51, 68, 15, 29, 18, 84, 17, 53, 40, 90, 91, 64, 19, 61, 54, 13, 85, 38],
    [20, 45, 78, 12, 37, 50, 72, 33, 32, 75, 28, 85, 95, 30, 91, 43, 86, 89, 66, 39, 76, 87, 19, 14, 10, 64, 88, 52, 55, 48],
    [30, 93, 21, 35, 95, 20, 44, 34, 51, 90, 33, 19, 11, 67, 78, 92, 13, 84, 56, 49, 97, 29, 60, 62, 25, 79, 66, 47, 76, 32],
    [70, 15, 54, 49, 65, 39, 22, 78, 20, 55, 94, 64, 61, 80, 19, 36, 48, 72, 45, 38, 28, 53, 27, 56, 73, 86, 47, 77, 58, 67],
    [58, 94, 68, 12, 17, 79, 36, 63, 98, 42, 65, 93, 48, 53, 35, 95, 31, 20, 24, 61, 29, 46, 96, 26, 19, 74, 67, 10, 75, 51],
    [32, 11, 81, 70, 14, 72, 57, 19, 85, 68, 90, 27, 37, 93, 58, 48, 82, 30, 97, 24, 35, 75, 16, 99, 21, 62, 91, 26, 40, 77],
    [55, 46, 71, 34, 68, 47, 93, 32, 96, 22, 17, 61, 31, 60, 67, 21, 79, 58, 90, 30, 27, 14, 81, 85, 20, 19, 64, 74, 84, 11]
]
  
let numero = parseInt(prompt('Digite um valor: '))
let matrizX = []
let contagem = 0


for(i=0;i<30;i++) {
    for(let c=0; c<30; c++){
        if (numero === matriz30x30[i][c]){
           contagem++
        } else {
            matrizX.push(matriz30x30[i][c])
        }
    }
}

console.log(`Existem ${contagem} valores iguais a ${numero}.`)
console.log(`Os valores diferentes são: ${matrizX}`)

//EXERCÍCIO 32
/*  Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
 cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
 matriz lida e a modificada */

 const matrizA = [
    [4, 75, 8, 11, 89, 22, 74, 26, 7, 68, 54, 91, 68],
    [48, 75, 47, 54, 60, 20, 44, 53, 21, 55, 76, 82, 8],
    [58, 78, 43, 38, 18, 55, 30, 69, 76, 93, 75, 11, 36],
    [41, 53, 69, 98, 95, 95, 75, 33, 69, 80, 55, 50, 95],
    [51, 35, 36, 18, 16, 64, 12, 62, 99, 73, 98, 15, 41],
    [44, 17, 88, 39, 37, 36, 11, 29, 96, 96, 17, 59, 65],
    [90, 61, 34, 58, 65, 11, 86, 11, 88, 16, 47, 56, 59],
    [69, 90, 11, 14, 12, 11, 62, 39, 36, 92, 98, 67, 58],
    [60, 29, 25, 51, 67, 91, 18, 37, 87, 48, 12, 89, 31],
    [25, 51, 23, 28, 67, 94, 40, 43, 95, 16, 35, 98, 60],
    [9, 81, 48, 74, 50, 7, 71, 80, 21, 92, 27, 25, 62],
    [4, 22, 68, 46, 77, 78, 75, 73, 77, 23, 28, 13, 2]
];

let matrizMulti = []

function multiplicarMatriz(matrizA) {
    let matrizMod = []
    let maior = Math.max(...matrizA)
    for (numero of matrizA) {
       let multiplicado = numero / maior
       matrizMod.push(multiplicado)
    }
    return matrizMod
}

for (pos in matrizA) {
    matrizMulti.push(multiplicarMatriz(matrizA[pos]))
}

console.log(matrizMulti)

for(i in matrizMulti) {
    console.log(`[${matrizMulti[i]}]`)
}

//EXERCÍCIO 33
/* Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */
let matrizEx33 = [[], [], []]

for (i=0; i<3; i++) {
    for (c=0; c<3; c++){
        let num = parseInt((Math.random() * (10 - (1)) + 4).toFixed(4))
        matrizEx33[i][c] = num
    }
}

console.log('Matriz: ' ,matrizEx33)

let mediaDiagSec = (matrizEx33[0][2] + matrizEx33[1][1] + matrizEx33[2][0]) / 3

console.log('Média da diagonal: ', mediaDiagSec)

let matrizMult = []

for (i=0; i<3; i++) {
    for (c=0; c<3; c++){
        if ( i == c) {
            let mult = matrizEx33[i][c] * mediaDiagSec
            matrizMult.push(mult)
        }
    }
}

console.log('Resultado: ', matrizMult)

//EXERCÍCIO 34
/* Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

const matriz34 = Array()
const matriz34Multi = Array()

for (i = 0; i < 50; i++) {
    let temp = []
    for (let c = 0; c < 50; c++) {
       let num = parseInt((Math.random() * (500 - (1)) + 1).toFixed())
       temp.push(num)
    }

    matriz34.push(temp);

}

console.log(matriz34)

for(i = 0; i < matriz34.length; i++) {
    for (c = 0; c < matriz34[i].length; c++) {
        if (i == c) {
            let multi = multiplicarLinha(i, matriz34[i][c])
            matriz34Multi.push(multi)
        }
    }
}

function multiplicarLinha(li, numDiag) {
    let temp = Array()
    for (let i = 0; i < matriz34[li].length; i++) {
        numMulti = matriz34[li][i] * numDiag
        temp.push(numMulti) 
    }
    return temp
}

console.log(matriz34Multi)

// EXERCÍCIO 35
/* Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */

let matrizex35 = Array()
let pares = Array()
let impares = Array()
for (i = 0; i < 30; i++) {
       let num = parseInt((Math.random() * (100 - (1)) + 1).toFixed())
       matrizex35.push(num)
}

matrizex35.forEach(numb => {
    if(numb % 2 == 0) {
        inserirPar(numb)
    } else {
        inserirImpar(numb)
    } 
});

imprimirPares()
imprimirImpares()

function inserirPar(numb) {
    if (pares.length < 5){
        pares.push(numb)
    } else {
        imprimirPares()
        pares = []
        pares.push(numb)
    }
}

function inserirImpar(numb) {
    if (impares.length < 5) {
        impares.push(numb)
    } else {
        imprimirImpares()
        impares = []
        impares.push(numb)
    }
}

function imprimirPares() {
    console.log(`Numeros Pares: ${pares}`)
}

function imprimirImpares() {
    console.log(`Numeros Impares: ${impares}`)
}

// EXERCÍCIO 36
/* Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

let gabarito =  Array()
let apostas =  Array()

for (i = 0; i < 13; i++) {
    let num = parseInt((Math.random() * (5 - (1)) + 1).toFixed())
    gabarito.push(num)
}

for (let i = 0; i < 100; i++) {
    let tempApt = []
    for (let l = 0; l < 13; l++) {
        let num = parseInt((Math.random() * (5 - (1)) + 1).toFixed())
        tempApt.push(num)
    }
    apostas.push(tempApt)
}

for (i = 0; i < apostas.length; i++) {
    gabarito = gabarito.sort(compararNum)
    let aposta = apostas[i].sort(compararNum)
    let acertos = 0

    for (a = 0; a < aposta.length; a++) {
        if (aposta[a] == gabarito[a]) {
            acertos++
        }
    }
        console.log('-'.repeat(10))
        console.log(`O Jogador nº ${i} teve ${acertos} acertos!`)

    if (acertos == 13) {
        console.log(`Parabéns você foi o GANHADOR!`)
    }
}

function compararNum (a,b) {
    return a - b
}


    
  