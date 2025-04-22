import { useContext, useState } from "react"

import { UsersContext } from "./usersContext"
import { users } from "../data"
import { AlertsContext } from "./alertsContext"

export const UsersProvider = ({ children }) => {

    const { newAlert } = useContext(AlertsContext)

    const [allUsers, setAllUsers] = useState(users)

    const setNewUser = (newUser = {}) => {
        setAllUsers([...allUsers, newUser])
    }

    const getUser = (user) => {
        const userData = allUsers.find(item => item.user === user)
        return userData
    }

    const updateUser = (newUser) => {

        const mailExist = allUsers.find(item => item.mail === newUser.mail)

        if (mailExist) {
            newAlert("danger", "El correo ya existe!")
            return
        }

        setAllUsers(prevUsers =>

            prevUsers.map(user =>
                user.user === newUser.user ? { ...user, ...newUser } : user
            )
        )

        newAlert("success", "Usuario actualizado correctamente!")
    }

    return (
        <UsersContext.Provider value={{ allUsers, setNewUser, getUser, updateUser }}>
            {children}
        </UsersContext.Provider>
    )
}