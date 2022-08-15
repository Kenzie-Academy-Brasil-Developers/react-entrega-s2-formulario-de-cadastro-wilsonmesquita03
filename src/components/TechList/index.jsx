import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import api from "../../services"
import { Button } from "../Button/style"
import ModalAdd from "../ModalAdd"
import TechCard from "../TechCard"
import { Container, UlContainer } from "./style"

const TechList = () => {
    const [addModalIsOpen, setAddModalIsOpen] = useState(false)
    const [techList, setTechList] = useState([])
    const { user } = useContext(AuthContext)

    function closeModal(){
        setAddModalIsOpen(false)
    }

    useEffect(() => {
        setTechList(oldList => [...oldList, ...user.techs])
    },[])

    function deleteTech(id){
        api.delete(`/users/techs/${id}`).then(res => {
            const newTechList = techList.filter(tech => tech.id !== id)
            setTechList(newTechList)
        }).catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <div>
                    <h1>Tecnologias</h1>
                    <Button onClick={() => setAddModalIsOpen(true)} tipo="grey">+</Button>
                </div>
                <UlContainer>
                    {techList?.map(({id, title, status}, i) => <TechCard key={i} title={title} status={status} id={id} deleteTech={deleteTech} />)}
                </UlContainer>
            </Container>
            {addModalIsOpen ? <ModalAdd setTechList={setTechList} closeModal={closeModal}/> : <></>}
        </>
    )
}

export default TechList