import { useContext, useRef } from "react"
import { NavLink } from "react-router"

import { UserContext } from "../../context"
import { useCloseSession } from "../hooks"

import { Menu } from "./Menu"
import { Dialog } from "../../ui/components"

export const Header = () => {

    const { userLogued } = useContext(UserContext)
    const { closeSession } = useCloseSession()
    const dialogRef = useRef()

    const callback = ()=>{
        closeSession()
    }

    return (
        <>
            <Dialog ref={dialogRef} text="Seguro que desea cerrar sesión?" callback={callback} />

            <header className="w-full h-14 bg-neutral-900 text-white px-3 flex items-center justify-between">
                <span>
                    <h1 className="text-blue-300 font-semibold text-lg">
                        Bikes.com
                    </h1>
                </span>

                <span>
                    <Menu />
                </span>

                <span className="flex items-center gap-2">
                    <NavLink className={({ isActive }) => `flex items-center gap-1 font-semibold cursor-pointer hover:underline underline-offset-2 ${isActive ? "text-blue-500" : "text-green-500"}`}
                        to="/me"
                    >
                        <i className="bi bi-person text-lg"></i>
                        {userLogued?.user}
                    </NavLink>
                    <button className="cursor-pointer hover:underline hover:text-red-600 underline-offset-2 transition"
                        onClick={()=>{
                            dialogRef.current.showModal()
                        }}
                    >
                        Salir
                    </button>
                </span>
            </header>
        </>
    )
}