import { useState } from 'react'
import './App.css'
import LoginScreen from './components/loginScreen'
import Footer from './components/Footer'
import HeaderHome from './components/HeaderHome'
import Home from './components/Home'

function App() {

  return (
 
      <div style={{ position: 'relative' }}>

        {/* <LoginScreen className="loginScreen"/>
        <Footer className="Footer"/> */}
        <HeaderHome />
        <Home />
      </div>


  )
}

export default App
