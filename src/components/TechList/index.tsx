import { useContext, useEffect, useState } from "react"
import { FieldValues } from "react-hook-form"
import { AuthContext } from "../../contexts/AuthContext"
import api from "../../services/api"
import { Button } from "../Button/style"
import ModalAdd from "../ModalAdd"
import TechCard from "../TechCard"
import { Container, UlContainer } from "./style"

export interface ITech {
    id: number
    title: string,
    status: string
}

const TechList = () => {
    const [addModalIsOpen, setAddModalIsOpen] = useState(false)
    const [techList, setTechList] = useState<ITech[]>([])
    const { user } = useContext(AuthContext)

    function closeModal(){
        setAddModalIsOpen(false)
    }

    useEffect(() => {
        if(user){
            setTechList(oldList => [...oldList, ...user.techs])
        }
    },[user])

    function deleteTech(id: number){
        api.delete(`/users/techs/${id}`).then(() => {
            const newTechList = techList.filter(tech => tech.id !== id)
            setTechList(newTechList)
        }).catch(err => console.log(err))
    }

    function addTech(data: FieldValues){
        api.post("/users/techs", data)
        .then(res => setTechList((oldList) => [res.data, ...oldList]))
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
            {addModalIsOpen ? <ModalAdd closeModal={closeModal} addTech={addTech}/> : <></>}
        </>
    )
}

export default TechList