import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services";

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const loader = (timer = 2000) => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        },timer)
    }

    
    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        api.defaults.headers.authorization = `Bearer ${token}`

        if(token) api.get("profile").then(res => {
            setUser(res.data)
            navigate("/dashboard", {replace: true})
        }).catch(err => localStorage.clear())

        
        loader(500)
    },[])

    const loging = (data) => {
         api.post("sessions", data)
        .then(res => {
            setUser(res.data.user)
            localStorage.setItem("@TOKEN", res.data.token)
            localStorage.setItem("@USERID", res.data.user.id)
            navigate("/dashboard", {replace: true})
            loader()
            return res
        })
        .catch(err => console.err(err))
    }

    const registering = (data) => {
        api.post("users", data)
        .then( res => {
            navigate('../', { replace: true })
            return res
        })
        .catch(err => console.log(err))
        
    }


    return (
        <AuthContext.Provider value={{user, loading, loging, setUser, loader, registering}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider