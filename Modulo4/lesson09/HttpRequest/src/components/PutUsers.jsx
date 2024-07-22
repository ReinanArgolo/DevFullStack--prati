import axios from "axios"
import { useState } from "react"


function PutUsers () {

    const [users, setUsers] = useState({
        name: 'teste',
        job: 'teste',
    })


    const sendRequest = () => {
        axios.put('https://reqres.in/api/users/2', users)
            .then(response => {
                console.log(response);
                alert(`Usuário recuperado: ${JSON.stringify(response.data)}`);
            })
            .catch(error => {
                console.log(`Erro ao recuperar o usuário ${error}`);
                alert(`Erro ao recuperar o usuário: ${error}`);
            })
    }

    



    return (

        <>
            <button onClick={sendRequest} style={{zIndex: 100}}>Put Users</button>
            
        </>
        
    )
}

export default PutUsers