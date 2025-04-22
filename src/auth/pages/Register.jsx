import { NavLink } from "react-router"
import { useEffect, useRef } from "react"

import { useForm, useValidateUserLogued } from "../../hooks"
import { useRegister } from "../hooks"

import { MainPage, Hr, Title, AlertsContainer } from "../../ui/components"
import { InputAuth } from "../components"

export const Register = () => {

    const { validate } = useValidateUserLogued(true)
    const { onRegister } = useRegister()
    const terms = useRef()
    const { user, mail, password, repassword, onInputChange } = useForm({
        user: '',
        mail: '',
        password: '',
        repassword: '',
    })

    useEffect(() => {
        validate()
    }, [])

    const onFormSubmit = (e) => {
        e.preventDefault()

        onRegister(user, mail, password, repassword, terms)
    }

    return (
        <>
            <AlertsContainer />
            <MainPage classes="flex justify-center items-center">
                <div className="w-2/3 h-2/3 bg-white shadow-md rounded-sm flex">

                    <section className="w-[60%] h-full">
                        <img src="bike2.jpg" alt="bike img"
                            className="w-full h-full object-fill rounded-bl-sm rounded-tl-sm"
                        />
                    </section>

                    <form className="flex-1 p-3 h-full relative" onSubmit={onFormSubmit}>
                        <span className="flex justify-center">
                            <Title title="Registrate" />
                        </span>
                        <Hr />

                        <span className="flex flex-col gap-7 mt-5">
                            <InputAuth
                                onChange={onInputChange}
                                value={user}
                                name="user"
                                type="user"
                                label="Usuario"
                            />
                            <InputAuth
                                onChange={onInputChange}
                                value={mail}
                                name="mail"
                                type="mail"
                                label="Mail"
                            />
                            <InputAuth
                                onChange={onInputChange}
                                value={password}
                                name="password"
                                type="password"
                                label="Contraseña"
                            />
                            <InputAuth
                                onChange={onInputChange}
                                value={repassword}
                                name="repassword"
                                type="password"
                                label="Repetir contraseña"
                            />

                            <span className="flex gap-2 items-center ml-1">
                                <input type="checkbox" id="terms"
                                    className="w-4 h-4"
                                    ref={terms}
                                />
                                <label htmlFor="terms"
                                    className="flex gap-1"
                                >
                                    Aceptar

                                    <NavLink to="/terms"
                                        target="_blank"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        terminos y condiciones
                                    </NavLink>

                                </label>
                            </span>

                            <span className="flex gap-1">
                                ¿Ya tienes una cuenta?
                                <NavLink
                                    to="/login"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    Iniciar
                                </NavLink>
                            </span>

                            <button className="w-[90%] bg-gray-600 text-white rounded-sm h-10 absolute bottom-2 left-1/2 -translate-1/2 cursor-pointer hover:bg-gray-900 transition-colors">
                                Registrarse
                            </button>

                        </span>
                    </form>

                </div>
            </MainPage>
        </>
    )
}