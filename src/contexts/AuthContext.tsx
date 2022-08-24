import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { getUser, IUser } from "../services/getUser";
import { handleLogin } from "../services/handleLogin";
import { handleRegister } from "../services/handleRegister";

interface IAuthProviderProps {
    children: ReactNode
}

export interface IWork {
    title: string,
    description: string,    
    deploy_url: string
}


export interface IUserLogin {
    email: string,
    password: string
}

interface IUserRegister {
    email: string,
    password: string,
    name: string,
    bio: string,
    contact: string,
    course_module: string
}

interface IAuthContext {
    setUser: (user: IUser | null) => void
    user: IUser | null,
    loading: boolean,
    loader: (timer?: number ) => void,
    login:  (data: IUserLogin) => void,
    register: (data: IUserRegister) => void,
}


export const AuthContext = createContext<IAuthContext>({} as IAuthContext)


const AuthProvider = ({children}: IAuthProviderProps) => {
    const navigate = useNavigate()
    const [user, setUser] = useState<IUser | null>(null) 
    const [loading, setLoading] = useState(true)

    function loader (timer = 2000) {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        },timer)
    }


    const login = async (data: IUserLogin) => {
        setLoading(true)
        const res = await handleLogin(data)

        if(res){
            setUser(res.user)
            localStorage.setItem("@TOKEN", res.token)
            localStorage.setItem("@USERID", res.user.id)
            navigate("/dashboard", {replace: true})
    
        }
        loader()
    }

    const register = async (data: IUserRegister) => {
        if(await handleRegister(data)){
            navigate('../', { replace: true })
        }
    }
    
    useEffect(() => {
        const request = async () => {
            const token = localStorage.getItem("@TOKEN")
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        
            if(token) {
                const user = await getUser()
                if(user){
                    setUser(user)
                    navigate("/dashboard", {replace: true})
                    
                }else{
                    navigate("/login", {replace: true})
                    localStorage.clear()
                    
                }
            }

            loader()
        }

        request()
    },[navigate])

    return (
        <AuthContext.Provider value={{user, loading, setUser, loader, login, register}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
