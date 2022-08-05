import { Container, DivHeader } from "./style"
import Logo from "../../assets/Logo.svg"
import { Button }  from "../Button/style"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate("login", { replace: true })
    }

    return (    
        <Container>
            <DivHeader>
                <img src={Logo} alt="" />
                <Button onClick={logout}  h="32px" theme="grey">Sair</Button>
            </DivHeader>
        </Container>
    )
}

export default NavBar