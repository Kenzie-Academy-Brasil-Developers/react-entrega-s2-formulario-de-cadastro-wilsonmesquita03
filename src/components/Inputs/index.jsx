import { TextField } from "@mui/material"
import * as yup from "yup"

const LoginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória").min(8, "A senha deve ter no mínimo 8 digitos").matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")  
})

const RegisterSchema = yup.object().shape({
    name: yup.string().required("Nome"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória").min(8, "A senha deve ter no mínimo 8 digitos").matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial"),
    confirmPassword: yup.string().oneOf([yup.ref("password")],"As senhas devem ser iguais"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required()
})

const InputName = ({register, error, message}) => {
    return (
        <TextField id="name" label="Nome" variant="filled" type="text" sx={{width: "90%"}} {...register("name")} error={error} helperText={message}/>
    )
}

const InputPassword = ({register, error, message}) => {
    return (
        <TextField id="password" label="Senha" variant="filled" type="password" sx={{width: "90%"}} {...register("password")} error={error} helperText={message}/>
    )
}

const InputConfirmPassword = ({register, error, message}) => {
    return (
        <TextField id="confirm-password" label="Confirmar senha" variant="filled" type="password" sx={{width: "90%"}} {...register("confirmPassword")} error={error} helperText={message}/>
    )
}

const InputEmail = ({register, error, message}) => {
    return (
        <TextField id="email" label="Email" variant="filled" type="text" sx={{width: "90%"}} {...register("email")} error={error} helperText={message}/>
    )
}

const InputBio = ({register, error, message}) => {
    return (
        <TextField id="bio" label="Bio" variant="filled" type="text" sx={{width: "90%"}} {...register("bio")} error={error} helperText={message}/>
    )
}

const InputContact = ({register, error, message}) => {
    return (
        <TextField id="contact" label="Contato" variant="filled" type="text" sx={{width: "90%"}} {...register("contact")} error={error} helperText={message}/>
    )
}


export {LoginSchema, RegisterSchema, InputName, InputPassword, InputEmail, InputConfirmPassword, InputBio, InputContact}