import { Container, DivHeader } from "./style"
import Logo from "../../assets/Logo.svg"
import { Button }  from "../Button/style"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const NavBar = () => {
    const navigate = useNavigate()

    const { setUser, loader } = useContext(AuthContext)

    const logout = () => {
        localStorage.clear()
        navigate("/login", { replace: true })
        setUser(null)
        loader(500)
    }

    return (    
        <Container>
            <DivHeader>
                <img src={Logo} alt="" />
                <Button onClick={logout}  h="32px" tipo="grey">Sair</Button>
            </DivHeader>
        </Container>
    )
}

export default NavBar