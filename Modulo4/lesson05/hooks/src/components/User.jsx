import {useEffect, useState} from 'react'

function UserProfile() {
    const [user, setUser] = useState()

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
            const userData = await response.json()
            setUser(userData)
        }

        fetchUserData()

        return () => setUser(null)
    }, [])

    return (
        // <div>
        //     {user && user.map(user => (
        //         <div key={user.id}>
        //             <h1>{user.name}</h1>
        //             <p>{user.email}</p>
        //         </div>
        //     ))}
        // </div>

        <div>
            {user ? (
                <div> 
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ) : (
                <p>Carregando perfil de Usuário</p>
            )}
        </div>

        
    )

}

export default UserProfile