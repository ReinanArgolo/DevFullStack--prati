const prompt = require("prompt-sync")();

let condition = true

let listaHoteis = [
    {
        id: 1,
        nome: 'Oscar',
        cidade: 'Belo Horizonte',
        quartosTotais: 10,
        quartosDisponiveis: 2
    },
    {
        id: 2,
        nome: 'Emmy',
        cidade: 'Teolandia',
        quartosTotais: 5,
        quartosDisponiveis: 2
    },
    {
        id: 3,
        nome: 'Rosevald',
        cidade: 'Teolandia',
        quartosTotais: 9,
        quartosDisponiveis: 2
    }
]

let reservas = [
    {
        id: 1,
        idHotel: 1,
        nomeCliente: 'Luan Marques'
    },
    {
        id: 2,
        idHotel: 1,
        nomeCliente: 'Luan Marques'
    },
]

while (condition) {
    console.log("\n1 - Adicionar Hotel\n2 - Buscar hotel por cidade\n3 - Fazer Reserva\n4 - Cancelar reserva\n5 - Listar Reservas\n6 - Encerrar\n")

    let escolha = parseInt(prompt('=>Digite a Opção desejada: '))

    if (escolha === 1) {
        listaHoteis.push(adicionarHotel(listaHoteis))

    } else if (escolha === 2) {
        buscarHotel(listaHoteis)

    } else if (escolha === 3) {
        fazerReserva(listaHoteis, reservas)

    } else if (escolha === 4) {
        cancelarReseva(reservas, listaHoteis)

    } else if (escolha === 5) {
        listarReservas(reservas, listaHoteis)

    } else if (escolha === 6) {
        console.log('\nEncerrando sistema... Obrigado por usar nossos serviços!')
        break;

    } else {
        console.log('---- Opção inválida! ----')
    }

}

function criarHotel(listaHoteis, nome, cidade, quartosTotais, quartosDisponiveis) {
    return {
        id: listaHoteis.length + 1,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosDisponiveis
    }
}

function adicionarHotel(listaHoteis) {
    let nome = prompt('Digite o nome do hotel: ')
    let cidade = prompt('Digite a cidade: ')
    let quartosTotais = parseInt(prompt('Digite a quantidade total de quartos: '))
    let quartosDisponiveis = parseInt(prompt('Digite a quantidade de quartos disponíveis: '))

    return criarHotel(listaHoteis, nome, cidade, quartosTotais, quartosDisponiveis)
}


function buscarHotel(listaHoteis) {
    let cidadeBuscada = prompt('Digite a cidade: ').toLowerCase();

    let hoteisEncontrados = listaHoteis.filter(hotel => hotel.cidade.toLowerCase() === cidadeBuscada);

    if (hoteisEncontrados.length > 0) {
        console.log(`Hoteis encontrados em ${cidadeBuscada}:`);
        for (let hotel of hoteisEncontrados) {
            console.log(`-------------------\nNOME: ${hotel.nome}\nID: ${hotel.id}\nCIDADE: ${hotel.cidade}\nQUARTOS DISPONÍVEIS: ${hotel.quartosDisponiveis}\n`);
        }
    } else {
        console.log(`Não foram encontrados hoteis em ${cidadeBuscada}.`);
    }
}

function fazerReserva(listaHoteis, reservas) {
    let idHotel = parseInt(prompt('Digite o ID do hotel desejado: '))
    let nomeCliente = prompt('Digite o nome do Cliente: ')

    let hotel = listaHoteis.find(hotel => hotel.id == idHotel)

    if (hotel && hotel.quartosDisponiveis > 0) {
        hotel.quartosDisponiveis--

        let idReserva = Math.floor(Date.now() * Math.random()).toString(36);

        let reserva = {
            id: idReserva,
            idHotel: idHotel,
            nomeCliente: nomeCliente
        }

        reservas.push(reserva)
        console.log(`\nReserva realizada com sucesso! O código de sua reserva é ${idReserva}\n`)
    } else {
        console.log('\nNão foi possível realizar sua reserva =(\nVerifique o ID ou a Disponibilidade de quartos no Hotel selecionado\n')
    }
}

function cancelarReseva(reservas, hoteis) {
    let idReserva = parseInt(prompt('Digite o CÓDIGO da reserva: '))

    let reservaSelecionada = reservas.find(reserva => reserva.id == idReserva)
    let posArray = reservas.indexOf(reservaSelecionada)

    let hotel = hoteis.find(hotel => hotel.id == reservaSelecionada.idHotel)

    if (reservaSelecionada) {
        console.log(`A reserva a ser cancelada é? \n  Código da Reserva: ${reservaSelecionada.id}\n  Código Hotel: ${reservaSelecionada.idHotel}\n  Nome Hotel: ${hotel.nome}\n  Cidade: ${hotel.cidade}\n  Nome do cliente: ${reservaSelecionada.nomeCliente}`)
        let resposta = prompt('S/N ').toLowerCase()


        if (resposta == 's') {

            console.log('Tem certeza que quer cancelar?')
            let respostaDois = prompt('S/N ').toLowerCase()

            if (respostaDois == 's') {
                reservas.splice(posArray, 1)
            } else {
                console.log('Operação cancelada!')
            }

        } else {
            console.log('Tudo bem, vamos tentar novamente!')
        }

    } else {
        console.log('Reserva não encontrada!')
    }

}

function listarReservas(reservasm, hoteis) {
    for (const index of reservas) {
        let hotel = hoteis.find(hotel => hotel.id == index.idHotel)


        console.log(`---RESERVA ${index.id} ---\n  ID: ${index.id} \n  CLIENTE: ${index.nomeCliente}\n  HOTEL: ${hotel.nome}`)
    }

    console.log('-- FIM DAS RESERVAS --')
}



