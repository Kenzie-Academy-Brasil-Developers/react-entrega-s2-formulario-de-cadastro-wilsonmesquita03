import { createContext, useState } from "react"

const darkModeContext = createContext({}) 

const DarkModeProvider = ({children}) => {
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