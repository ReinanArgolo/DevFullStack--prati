import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Educacao from './components/Educacao'
import Tecnologia from './components/Tecnologia'
import Ciencia from './components/Ciencia'
import Navigation from './components/Navgation'


function App() {

  return (
    <>


     <Router>
     <Navigation/>
      <Routes>
        {/* <Route path='/' Component={Tecnologia} />
        <Route path='/educacao' Component={Educacao} />
        <Route path='/ciencia' Component={Ciencia} /> */}


        <Route path='/' Component={Tecnologia} />
        <Route path='/educacao' Component={Educacao} />
        <Route path='/ciencia' element={<Navigate to="/"/>} />
        
      </Routes>
     </Router>
    </>
  )
}

export default App
