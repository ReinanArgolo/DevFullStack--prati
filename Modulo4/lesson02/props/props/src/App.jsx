import Props from './components/props'

const itens = {
  autor: "reinan",
  favoriteBook: "Sla"
}

function App() {
  return (
    <Props props={itens} />
  )
}

export default App