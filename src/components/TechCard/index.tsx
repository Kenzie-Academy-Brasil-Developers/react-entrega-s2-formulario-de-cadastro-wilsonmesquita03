import { DivButton, LiContainer } from "./style"

import TrashIcon from "../../assets/TrashIcon.svg"
import { Button } from "@mui/material"

interface ITechCardProps {
    title: string,
    status: string,
    deleteTech: (techID: number) => void
    id: number
}

const TechCard = ({title, status, deleteTech, id}: ITechCardProps) => {
    return (
        <LiContainer>
            <h1>{title}</h1>
            <DivButton>
                <h4>{status}</h4>
                <Button onClick={() => deleteTech(id)}>
                    <img src={TrashIcon} alt="lixeira"/>
                </Button>
            </DivButton>
        </LiContainer>
    )
}

export default TechCard