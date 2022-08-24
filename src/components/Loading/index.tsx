import { CircularProgress } from "@mui/material"
import { ReactNode, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { LoadingContainer } from "./style"

interface ILoadingProps {
    children: ReactNode
}

const Loading = ({children}: ILoadingProps) => {
    const { loading } = useContext(AuthContext)
    
    
    return (
        <>
            {loading ? <LoadingContainer><CircularProgress/></LoadingContainer> : <></>}
            {children}
        </>
    )
}

export default Loading