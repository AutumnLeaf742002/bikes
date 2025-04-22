import { useEffect, useState } from "react"

import { UserContext } from "./userContext"

export const UserProvider = ({ children }) => {

    const [ userLogued, setUserLogued ] = useState(JSON.parse(localStorage.getItem("user")))

    useEffect(()=>{

        localStorage.setItem("user", JSON.stringify(userLogued))
    }, [userLogued])

    return (
        <UserContext.Provider value={ {userLogued, setUserLogued} }>
            { children }
        </UserContext.Provider>
    )
}