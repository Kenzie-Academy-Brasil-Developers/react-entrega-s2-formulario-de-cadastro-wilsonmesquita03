import NavBar from "../../components/NavBar"
import Header from "../../components/Header"
import { Container, MoreInfo } from "./style" 

const Dashboard = () => {
    return (
        <Container>
            <NavBar/>
            <Header/>
            <MoreInfo>
                <h1>Que pena! Estamos em desenvolvimento :(</h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </MoreInfo>
        </Container>    
    )
}

export default Dashboard