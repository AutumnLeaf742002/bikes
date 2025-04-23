import { useContext } from "react"
import { useNavigate } from "react-router"

import { UserContext } from "../../context"

export const useCloseSession = () => {

    const { setUserLogued } = useContext(UserContext)

    const navigate = useNavigate()

    const closeSession = ()=>{
        setUserLogued(null)
        navigate("/login")
    }

    return {
        closeSession
    }
}