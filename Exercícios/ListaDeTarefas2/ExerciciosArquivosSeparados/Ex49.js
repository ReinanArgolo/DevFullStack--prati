const transacoes = [
    { id: 1, valor: 100, data: '2024-06-01', categoria: 'Alimentação' },
    { id: 2, valor: 200, data: '2024-06-02', categoria: 'Transporte' },
    { id: 3, valor: 50, data: '2024-06-03', categoria: 'Alimentação' },
    { id: 4, valor: 150, data: '2024-06-04', categoria: 'Lazer' },
    { id: 5, valor: 300, data: '2024-06-05', categoria: 'Transporte' }
];



function categorizarTransacoes(transacoes) {
    const resultado = {};

    transacoes.forEach(transacao => {
        const { categoria, valor } = transacao;

        if (!resultado[categoria]) {
        resultado[categoria] = {
            transacoes: [],
            subtotal: 0
        };
        }

        resultado[categoria].transacoes.push(transacao);

        resultado[categoria].subtotal += valor;
    });

    return resultado;
}
  
  
const resultado = categorizarTransacoes(transacoes);
console.log(JSON.stringify(resultado, null, 2));
  