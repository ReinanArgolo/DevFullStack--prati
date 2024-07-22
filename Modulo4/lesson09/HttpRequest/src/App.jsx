import FormRegister from "./components/FormRegister"
import './App.scss'
import GetUsers from "./components/GetUsers"
import PutUsers from "./components/PutUsers"
import DeleteUsers from "./components/DeleteUsers"





function App() {
  return (
    <>
      <FormRegister />

      <div className="buttons-aix">
        <GetUsers/>
        <PutUsers/>
        <DeleteUsers/>
      </div>
      
    </>
  )
}

export default App
