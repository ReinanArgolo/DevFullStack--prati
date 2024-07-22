import axios from "axios";


const DeleteUsers = () => { 

    const deletRequest = () => {
        axios.delete('https://reqres.in/api/users/', { data: { id: 2 } })
            .then(response => {
                console.log(response);
                alert(`Usuário deletado: ${JSON.stringify(response.data)}`);
            })
            .catch(error => {
                console.log(`Erro ao deletar o usuário ${error}`);
                alert(`Erro ao deletar o usuário: ${error}`);
            })
            
    }

    return (
        <>
            <button onClick={deletRequest}>Delete Users</button>
        </>
    )
}

export default DeleteUsers