let promessa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let resposta = {}

        if (false) {
            resposta = {
                codigo: 404,
                erro: 'objeto não encontrado'
            }

            reject(resposta)
        }

        resposta = {
            0: {id: 1, nome: 'Caio'},
            1: {id: 2, nome: 'Leonan'},
            2: {id: 3, nome: 'Rogério'},
        }

        resolve(resposta)
    }, 4000)

}).then(() => {
    setTimeout(()=>{
        let resposta = {}

        if (false) {
            resposta = {
                codigo: 1000,
                erro: 'Assistir One Piece'
            }

            reject(resposta)
        }

        resposta = {
            0: {id: 1, nome: 'Teste'},
            1: {id: 2, nome: 'Aluno2'},
            2: {id: 3, nome: 'Maos'},
        }

        resolve(resposta)
    }, 4000)
}).then((dados) => {

}).catch((erro) =>{
    console.log(erro)
}).then(() => {

})
