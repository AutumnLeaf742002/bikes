import { useContext } from "react"
import { useNavigate } from "react-router"

import { UserContext, UsersContext, AlertsContext } from "../../context"

export const useLogin = () => {

    const { allUsers } = useContext(UsersContext)
    const { newAlert } = useContext(AlertsContext)
    const { setUserLogued } = useContext(UserContext)

    const navigate = useNavigate()

    const onLogin = (user = "", password = "") => {

        user = user.trim().toLowerCase()
        password = password.trim().toLowerCase()

        const exist = allUsers.find(item => item.user === user && item.password === password)

        if (user.length <= 1 || password.length <= 1) {
            newAlert("warning", "Los campos no pueden estar vacíos")
            return
        }

        if (exist !== undefined) {
            setUserLogued({ user })
            navigate("/home")
        }
        else {
            newAlert("danger", "Usuario o contraseña incorrectos!")
            return
        }
    }

    return {
        onLogin
    }
}