import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import ProtectedLogin from './components/ProtectedLogin'
import Login from './components/Login'


function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/home' Component={Home} />
        <Route path='/login' Component={Login} />
        <ProtectedLogin isLogin={false}>
          <Navigate to="/home"/>
        </ProtectedLogin>
      </Routes>
     </Router>
    </>
  )
}

export default App
