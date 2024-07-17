import { useState } from "react"
import UserCard from "./components/UserCard"


function App() {
  const [user, setUser] = useState({name: 'John', age: 30})

  return (
    <>
      <UserCard user={user} setUser={setUser} />
    </>
  )
}

export default App
