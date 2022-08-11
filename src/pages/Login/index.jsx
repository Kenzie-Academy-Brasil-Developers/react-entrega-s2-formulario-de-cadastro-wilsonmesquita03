import { Form } from "../../components/FormMain/style"
import { Container } from "./style"
import { Button } from "../../components/Button/style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"

import { LoginSchema, InputEmail, InputPassword } from "../../components/Inputs"
import SwitchMode from "../../components/SwitchMode"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Login = () => {
    const navigate = useNavigate()

    const { loging, loader, user } = useContext(AuthContext) 

    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(LoginSchema)
    })


    const notRegistered = (e) => {
        navigate("/register", {replace: true})
        loader(800)
    }

    return (
        <Container>
            <img src={Logo} alt="" />
            <SwitchMode />
            <Form onSubmit={handleSubmit(loging)}>
                <h1>Conecte-se</h1>
                <InputEmail register={register} error={errors.email ? true : false} message={errors.email?.message}/>
                <InputPassword register={register} error={errors.password ? true : false} message={errors.password?.message}/>
                <Button type="submit">Entrar</Button>
                <p>Ainda não é registrado?</p>
                <Button onClick={notRegistered} tipo="grey">Cadastre-se</Button>
            </Form>
        </Container>
        
    )
}

export default Login