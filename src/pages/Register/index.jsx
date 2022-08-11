import { Form } from "../../components/FormMain/style"
import { Container, Div } from "./style"
import { Button } from "../../components/Button/style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Logo from "../../assets/Logo.svg"
import { InputName, InputEmail, InputPassword, InputConfirmPassword, InputBio, InputContact, RegisterSchema } from "../../components/Inputs"
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Register = () => {
    const { loader, registering } = useContext(AuthContext)

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(RegisterSchema)
    })

    const goBack = () => {
        navigate('../', { replace: true })
        loader(300)
    }

    return (
        <Container>
            <Div>
                <img src={Logo} alt="logo" />
                <Button onClick={goBack} tipo="grey" fw="600" h="40px">Voltar</Button>
            </Div>
            <Form onSubmit={handleSubmit(registering)}>
                <h1>Crie sua conta</h1>
                <p>Rapido e grátis, vamos nessa</p>
                <InputName register={register} error={errors.name ? true : false} message={errors.name?.message}/>
                <InputEmail register={register} error={errors.email ? true : false} message={errors.email?.message}/>
                <InputPassword register={register} error={errors.password ? true : false} message={errors.password?.message}/>
                <InputConfirmPassword register={register} error={errors.confirmPassword ? true : false} message ={errors.confirmPassword?.message}/>
                <InputBio register={register} error={errors.bio ? true : false} message ={errors.bio?.message}/>
                <InputContact register={register} error={errors.contact ? true : false} message ={errors.contact?.message} /> 
                <FormControl variant="filled" sx={{ m: 1, minWidth: "90%" }}>
                    <InputLabel id="demo-simple-select-filled-label">Selecionar Modulo</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    {...register("course_module")}
                    error={errors.course_module ? true : false}
                    defaultValue="Primeiro módulo (Introdução ao Frontend)"
                    >
                        <MenuItem value="Primeiro módulo (Introdução ao Frontend)">Módulo 1</MenuItem>
                        <MenuItem value="Segundo módulo (Frontend Avançado)">Módulo 2</MenuItem>
                        <MenuItem value="Terceiro módulo (Introdução ao Backend)">Módulo 3</MenuItem>
                        <MenuItem value="Quarto módulo (Backend Avançado)">Módulo 4</MenuItem>
                    </Select>
                </FormControl>
                
                <Button type="submit" >Cadastrar</Button>
            </Form>
        </Container>
    )
}

export default Register