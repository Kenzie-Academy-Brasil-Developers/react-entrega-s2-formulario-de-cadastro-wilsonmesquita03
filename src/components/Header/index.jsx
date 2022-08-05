import { useEffect, useState } from "react"
import { Container, DivHeader } from "./style"
import api from "../../services"

const Header = () => {
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        const userID = localStorage.getItem("@USERID")

        api.get(`users/${userID}`)
        .then(res => {
            setUser(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    },[])

    console.log(user)

    return (
        <Container>
            <DivHeader>
                <h1>Olá, {user?.name}</h1>
                <h4>{user?.course_module}</h4>
            </DivHeader>
        </Container>
    )
}

export default Header