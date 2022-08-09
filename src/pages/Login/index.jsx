import { Form } from "../../components/FormMain/style"
import { Container } from "./style"
import { Button } from "../../components/Button/style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../services"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"

import { LoginSchema, InputEmail, InputPassword } from "../../components/Inputs"
import SwitchMode from "../../components/SwitchMode"

const Login = () => {
    const navigate = useNavigate()

    /* .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial") */

    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(LoginSchema)
    })

    const loging = (data) => {
        api.post("sessions", data)
        .then(res => {
            localStorage.setItem("@TOKEN", res.data.token)
            localStorage.setItem("@USERID", res.data.user.id)
            navigate("dashboard")
            return res
        })
        .catch(err => console.err(err))
    }


    const notRegistered = () => {
        navigate("register", {replace: true})
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