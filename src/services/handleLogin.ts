import api from "./api"
import { IUser } from "./getUser"
import { IUserLogin } from "../contexts/AuthContext"

interface IHandleLogin {
    user: IUser
    token: string
}


export async function handleLogin(loginData: IUserLogin): Promise<IHandleLogin> {
    const { data } = await api.post<IHandleLogin>("sessions", loginData).then(res => res)

    return data 
}
