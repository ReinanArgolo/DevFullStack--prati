import UserProfile from "./UserProfile";

const UserCard = ({user, setUser}) => {
    return (
        <div>
            <UserProfile user={user} setUser={setUser} />
        </div>
    )
}

export default UserCard