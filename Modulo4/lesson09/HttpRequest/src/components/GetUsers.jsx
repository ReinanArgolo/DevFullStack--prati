import axios from 'axios';

const sendRequest = () => {
    axios.get('https://reqres.in/api/users/2')
        .then(response => {
            console.log(`Dados do Usuário:` + response.data);
            alert(`Usuário recuperado: ${JSON.stringify(response.data)}`);
        })
        .catch(error => {
            console.log(`Erro ao recuperar o usuário ${error}`);
            alert(`Erro ao recuperar o usuário: ${error}`);
        })
}

function GetUsers() {

    


    return (
        <button onClick={sendRequest} style={{zIndex: 100}}>Get Users</button>
    )
}

export default GetUsers