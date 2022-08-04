import { Form } from "../../components/FormMain/style"
import { TextField } from "@mui/material"
import { Container } from "./style"
import { Button } from "../../components/Button/style"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../services"

const Login = () => {
    const userSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email(),
        password: yup.string().required("Senha obrigatória").min(4, "A senha deve ter no minimo 8 digitos")
       
    })


    /* .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial") */

    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(userSchema)
    })

    const login = (data) => {
        api.post("sessions", data)
        .then(res => {
            console.log(res)
            window.localStorage.setItem("@userToken", res.data.token)
            return res
        })
        .catch(err => console.log(err))
    }

    const notRegistered = () => {
        
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(login)}>
                <h1>Conecte-se</h1>
                <TextField id="email" label="Email" variant="filled" sx={{width: "90%"}} {...register("email")} error={errors.name ? true : false} helperText={errors.name?.message}/>
                <TextField id="password" label="Senha" variant="filled" type="password" sx={{width: "90%"}} {...register("password")} error={errors.password ? true : false} helperText={errors.password?.message}/>
                <Button>Entrar</Button>
                <p>Ainda não possui uma conta?</p>
                <Button onClick={notRegistered} theme="grey">Cadastre-se</Button>
            </Form>
        </Container>
        
    )
}

export default Login