import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { Button } from "../Button/style"
import { Modal, ModalContainer, ModalHeader } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../services"

const ModalAdd = ({setTechList, closeModal}) => {

    const addSchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório").min(3, "Minimo de 3 letras"),
        status: yup.string().required("Campo obrigatório")
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(addSchema)
    })
    
    function addTech(data){
        api.post("/users/techs", data)
        .then(res => setTechList((oldList) => [...oldList, res.data]))
    }

    return (
        <ModalContainer>
            <ModalHeader>
                <h1>Cadastrar Tecnologia</h1>
                <Button onClick={closeModal}>X</Button>
            </ModalHeader>
            <Modal onSubmit={handleSubmit(addTech)}>
                <TextField id="name" label="Nome" variant="filled" type="text" sx={{width: "100%"}} {...register("title")} error={errors.title?.message ? true : false} helperText={errors.title?.message}/>
                <FormControl variant="filled" sx={{width: "100%", color: "var(--Grey-0)"}}>
                        <InputLabel id="demo-simple-select-filled-label">Selecionar Modulo</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        {...register("status")}
                        error={errors.status ? true : false}
                        defaultValue="Iniciante"
                        sx={{width: "100%"}}
                        >
                            <MenuItem value="Iniciante">Iniciante</MenuItem>
                            <MenuItem value="Intermediário">Intermediário</MenuItem>
                            <MenuItem value="Avançado">Avançado</MenuItem>
    
                        </Select>
                </FormControl>
                        <Button type="submit">Cadastrar tecnologia</Button>
            </Modal>
        </ModalContainer>
    )
}

export default ModalAdd