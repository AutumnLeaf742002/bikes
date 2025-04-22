import { useContext, useRef } from "react"
import { useNavigate } from "react-router"

import { AlertsContext, UserContext, UsersContext } from "../../context"
import { useForm } from "../../hooks"
import { validateMail } from "../../auth/helpers"

import { Hr, Title, Dialog, AlertsContainer } from "../../ui/components"
import { InputAuth } from "../../auth/components"

export const Perfil = () => {

    const { userLogued } = useContext(UserContext)
    const { getUser, updateUser } = useContext(UsersContext)
    const { newAlert } = useContext(AlertsContext)

    const dialogRef = useRef()

    const userInfo = getUser(userLogued.user)
    const { user, mail, password, onInputChange } = useForm(userInfo)


    const callback = () => {
        updateUser({ user, mail, password })
    }

    const onFormSubmit = (e) => {

        e.preventDefault()

        if (mail.length <= 1 || password.length <= 1) {
            newAlert("danger", "Los campos no pueden estar vacios!")
            return
        }
        if (!validateMail(mail)) {
            newAlert("danger", "El correo no es valido!")
            return
        }

        dialogRef.current.showModal()
    }

    return (
        <>

            <AlertsContainer />

            <Dialog ref={dialogRef} text="Deseas actualizar la informacion de perfil?" callback={callback} />

            <div className="w-full h-full flex justify-center">
                <form className="w-1/3 h-2/3 mt-18 bg-white rounded-md shadow-lg p-3 flex flex-col"
                    onSubmit={onFormSubmit}
                >

                    <span className="text-center">
                        <Title title={user} />
                    </span>
                    <Hr />


                    <div className="flex flex-col gap-6 mt-8">

                        <InputAuth label="Mail" type="mail" name="mail" value={mail} onChange={onInputChange} />

                        <InputAuth label="Contraseña" type="text" name="password" value={password} onChange={onInputChange} />

                    </div>

                    <div className="flex-1 flex items-end">
                        <button className="w-full h-8 text-lg bg-amber-300 rounded-sm cursor-pointer hover:bg-amber-400">
                            Editar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}