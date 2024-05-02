var clientes = [
    {
        'id': 1,
        'nome': 'Luis Santos Silveira',
        'idade': 18
    },

    {
        'id': 2,
        'nome': 'Ricardo Lopes Alves',
        'idade': 30
    },

    {
        'id': 3,
        'nome': 'Gustavo Silva Junior',
        'idade': 26
    }
];
var numero = "5(1)9-876-543-21";

clientes.forEach((cliente) => {
    let nomes = cliente.nome.split(' ')
    console.log(`${nomes[nomes.length-1]}, ${nomes[0]}`)
})