import { ITech } from "../components/TechList"
import { IWork } from "../contexts/AuthContext"
import api from "./api"

export interface IUser {
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    created_at: string,
    updated_at: string,
    techs: ITech[],
    works: IWork[],
    avatar_url: null
}

export async function getUser (): Promise<IUser> {
    const { data } = await api.get<IUser>("profile").then(res => res).finally()

    return data
}
