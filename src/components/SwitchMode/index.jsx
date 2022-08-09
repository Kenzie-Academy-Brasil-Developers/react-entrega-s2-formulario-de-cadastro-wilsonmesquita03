import { useContext } from "react"
import { darkModeContext } from "../../contexts/darkMode.js"
import MaterialUISwitch from "./style.js"



const SwitchMode = () => {
    const {switchMode} = useContext(darkModeContext) 

    return (
        <MaterialUISwitch onChange={switchMode} defaultChecked />
    )
}

export default SwitchMode