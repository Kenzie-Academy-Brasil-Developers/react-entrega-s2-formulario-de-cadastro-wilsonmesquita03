import { CircularProgress } from "@mui/material"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { LoadingContainer } from "./style"

const Loading = ({children}) => {
    const { loading } = useContext(AuthContext)
    
    
    return (
        loading ? <LoadingContainer><CircularProgress/></LoadingContainer> : children
    )
}

export default Loading