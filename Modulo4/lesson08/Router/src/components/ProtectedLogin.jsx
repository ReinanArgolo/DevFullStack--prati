import { Navigate } from "react-router-dom"

function ProtectedLogin({isLogin, children}) {
    if (!isLogin) {
        return <Navigate to="/login"/>
    }
    
    return children
}

export default ProtectedLogin