import './App.css';
import LanguageTranslator from './components/languageTranslator';
import MovieSearchEngine from './components/movieSearchEngine';
import QRCodeGenerator from './components/QRCodeGenerator';
import IpFinder from './components/IPAddressFinder';
import LoginScreen from './components/loginScreen';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [isLogged, setIsLogged] = useState(true);

  console.log('isLogged:', isLogged);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen setIsLogged={setIsLogged} />} />
        <Route path='/translate' element={isLogged ? <LanguageTranslator /> : <Navigate to='/' />} />
        <Route path='/movieSearch' element={isLogged ? <MovieSearchEngine /> : <Navigate to='/' />} />
        <Route path='/qrCode' element={isLogged ? <QRCodeGenerator /> : <Navigate to='/' />} />
        <Route path='/ipFinder' element={isLogged ? <IpFinder /> : <Navigate to='/' />} />
        <Route path='/home' element={isLogged ? <Home /> : <Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
