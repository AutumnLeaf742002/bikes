import { useContext } from "react"
import { useNavigate } from "react-router"

import { UserContext } from "../context"

export const useValidateUserLogued = (p = false) => {

    const { userLogued } = useContext(UserContext)
    const navigate = useNavigate()

    const validate = () => {

        if (p === true) {

            if (userLogued !== null) navigate("/home")
            return
        }

        if (userLogued === null) navigate("/login")
    }

    return { validate }
}