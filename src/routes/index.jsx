import { Routes, Route, Navigate } from "react-router-dom"

import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import ProtectedRoutes from "../components/ProtectedRoutes"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/login" replace/>}/>
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Route>
        </Routes>
    )
}

export default RoutesMain