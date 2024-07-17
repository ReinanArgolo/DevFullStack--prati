const UserProfile = ({user, setUser}) => {

    return (
        <div>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>

            <button onClick={() => setUser(...user, age: user.age + 1)}>Aumentar a Idade</button>

        </div>

    )
}

export default UserProfile