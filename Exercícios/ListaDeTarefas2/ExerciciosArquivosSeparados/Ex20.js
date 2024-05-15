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

// Função para gerar dados aleatórios de um funcionário
function gerarFuncionario() {
  const matricula = Math.floor(Math.random() * 100000) + 1; // Matrícula entre 1 e 100000
  const nome = `Nome Aleatório ${matricula}`; // Nome aleatório com base na matricula
  const salarioBruto = (Math.random() * 4000 + 1500).toFixed(2); // Salário bruto entre R$ 1500 e R$ 5500
  
  return {
    matricula: matricula,
    nome: nome,
    salarioBruto: salarioBruto,
  };
}

// Gerar 80 funcionários e adicionar ao array
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