import { FieldValues, SubmitHandler } from "react-hook-form"
import api from "./api"

export interface IUserRegister {
    email: string,
    password: string,
    name: string,
    bio: string,
    contact: string,
    course_module: string
}

export const handleRegister: SubmitHandler<FieldValues> = (data) => {
    return api.post("users", data)
    .then(() =>  true)
    .catch(() => false)
    
}