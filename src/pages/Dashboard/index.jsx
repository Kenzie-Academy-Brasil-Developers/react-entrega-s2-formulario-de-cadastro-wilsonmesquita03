import NavBar from "../../components/NavBar"
import Header from "../../components/Header"
import { Container, MoreInfo } from "./style" 
import TechList from "../../components/TechList"

const Dashboard = () => {
    return (
        <Container>
            <NavBar/>
            <Header/>
            <TechList/>
        </Container>    
    )
}

export default Dashboard