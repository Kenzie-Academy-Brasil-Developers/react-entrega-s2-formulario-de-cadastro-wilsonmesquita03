import { useContext } from "react"
import { Container, DivHeader } from "./style"
import { AuthContext } from "../../contexts/AuthContext"

const Header = () => {
    const { user } = useContext(AuthContext)

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