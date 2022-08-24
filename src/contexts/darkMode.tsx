import { createContext, ReactNode, useState } from "react"

interface IDarkModeProviderProps {
    children: ReactNode
}

interface IDarkModeContext {
    switchMode: () => void
    isNightMode: boolean
}

const darkModeContext = createContext<IDarkModeContext>({} as IDarkModeContext) 



const DarkModeProvider = ({children}: IDarkModeProviderProps) => {
    const [isNightMode, setIsNightMode] = useState(true)

    const switchMode = () => {
        setIsNightMode(!isNightMode)
    }
    
    return (
        <darkModeContext.Provider value={{switchMode, isNightMode}}>
            {children}
        </darkModeContext.Provider>
    )
}

export {DarkModeProvider, darkModeContext}