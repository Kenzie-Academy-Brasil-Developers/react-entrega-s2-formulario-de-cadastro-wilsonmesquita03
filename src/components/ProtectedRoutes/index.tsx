import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
    const { user, loading } = useContext(AuthContext)

    if(loading){
        return (
            <div>carregando</div>
        )
    }

    return (
        
        user ? <Outlet/> : <Navigate to="/login" />
        
    )
    

}

export default ProtectedRoutes