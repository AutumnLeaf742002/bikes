import { useContext } from "react"
import { useNavigate } from "react-router"

import { UserContext, UsersContext, AlertsContext } from "../../context"
import { validateMail } from "../helpers"

export const useRegister = () => {

    const { newAlert } = useContext(AlertsContext)
    const { allUsers, setNewUser } = useContext(UsersContext)
    const { setUserLogued } = useContext(UserContext)

    const navigate = useNavigate()

    const onRegister = (user = "", mail = "", password = "", repassword = "", terms) => {

        user = user.trim().toLowerCase()
        mail = mail.trim().toLowerCase()
        password = password.trim().toLowerCase()
        repassword = repassword.trim().toLowerCase()

        const { checked } = terms.current

        if (user.length <= 1 || mail.length <= 1 || password.length <= 1 || repassword.length <= 1){
            newAlert("warning", "Todos los campos son obligatorios")
            return
        }

        if(!validateMail(mail)){
            newAlert("danger", "El correo no es valido")
            return
        }
        
        if (repassword !== password){
            newAlert("danger", "Las contraseñas no coinciden")
            return
        }

        if(!checked){
            newAlert("warning", "Debes aceptar los terminos y condiciones")
            return
        }

        const exist = allUsers.find(item => item.user === user || item.mail === mail)
        if(exist != undefined){
            newAlert("danger", "El usuario o el correo ya existen")
            return
        }

        setNewUser({user, mail, password})
        setUserLogued({user})
        navigate("/home")
    }

    return {
        onRegister
    }
}