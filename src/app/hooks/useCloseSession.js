import { useNavigate } from "react-router"

export const useCloseSession = () => {

    const navigate = useNavigate()

    const closeSession = ()=>{
        localStorage.removeItem("user", null)
        navigate("/login")
    }

    return {
        closeSession
    }
}