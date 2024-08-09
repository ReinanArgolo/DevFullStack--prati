import { useState } from 'react'
import './App.css'
import LoginScreen from './components/loginScreen'
import Footer from './components/Footer'
import HeaderHome from './components/HeaderHome'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Resultado from './components/Resultado'


function App() {

  return (

    <div style={{ position: 'relative' }}>

      <Router>

        <Routes>

          <Route path='/' element={<Navigate replace to="/login" />} />

          <Route path='/login' element={
            <>
              <LoginScreen />
              <Footer />
            </>} />

          <Route path='/home' element={
            <>
              <HeaderHome />
              <Home />
              <Footer />
            </>} />

            <Route path="/resultado/:id" element={
            <>
              <HeaderHome />
              <Resultado />
              <Footer />
            </>} />

        </Routes>
      </Router>


    </div>


  )
}

export default App
