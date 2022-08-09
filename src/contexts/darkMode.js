import { createContext, useState } from "react"

const darkModeContext = createContext({}) 

const DarkModeProvider = ({children}) => {
    const [isNightMode, setIsNightMode] = useState("dark")

    const switchMode = () => {
        if(isNightMode === "dark"){
            setIsNightMode("light")
        }else{
            setIsNightMode("dark")
        }
    }
    
    return (
        <darkModeContext.Provider value={{switchMode, isNightMode}}>
            {children}
        </darkModeContext.Provider>
    )
}

export {DarkModeProvider, darkModeContext}