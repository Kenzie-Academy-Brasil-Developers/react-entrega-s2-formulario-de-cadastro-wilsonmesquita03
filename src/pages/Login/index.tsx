import { Form } from "../../components/FormMain/style"
import { Container } from "./style"
import { Button } from "../../components/Button/style"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import Logo from "../../assets/Logo.svg"
import { useNavigate } from "react-router-dom"

import { LoginSchema, InputEmail, InputPassword } from "../../components/Inputs"
import { ReactNode, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Login = () => {
    const navigate = useNavigate()

    const { login, loader } = useContext(AuthContext) 

    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(LoginSchema)
    })


    const notRegistered = () => {
        navigate("/register", {replace: true})
        loader(800)
    }

    return (
        <Container>
            <img src={Logo} alt="Logo" />
            <Form onSubmit={handleSubmit(login as SubmitHandler<FieldValues>)}>
                <h1>Conecte-se</h1>
                <InputEmail register={register} error={errors.email ? true : false} message={errors.email?.message as ReactNode}/>
                <InputPassword register={register} error={errors.password ? true : false} message={errors.password?.message as ReactNode}/>
                <Button type="submit">Entrar</Button>
                <p>Ainda não é registrado?</p>
                <Button onClick={notRegistered} tipo="grey">Cadastre-se</Button>
            </Form>
        </Container>
        
    )
}

export default Login