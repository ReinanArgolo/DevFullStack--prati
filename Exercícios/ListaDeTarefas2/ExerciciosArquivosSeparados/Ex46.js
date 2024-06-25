/*  Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor */

const vendas = [
    {
        vendendor: 'Marcos',
        valor: 1340
    },
    {
        vendendor: 'Suzane',
        valor: 1500
    },
    {
        vendendor: 'Paulo',
        valor: 800
    },
    {
        vendendor: 'Suzane',
        valor: 620
    },   
]

let soma = {}
vendas.forEach(venda => {
    if(venda.vendendor in soma) {
        soma[venda.vendendor] += venda.valor
    } else {
        soma[venda.vendendor] = venda.valor
    }
});

console.log(soma)
