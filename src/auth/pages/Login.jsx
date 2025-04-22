import { NavLink, useLocation } from "react-router"
import { useEffect } from "react"
import queryString from 'query-string'

import { useForm } from "../../hooks"
import { useLogin } from "../hooks"
import { useValidateUserLogued } from "../../hooks"

import { MainPage, Hr, Title, AlertsContainer } from "../../ui/components"
import { InputAuth } from "../components"

export const Login = () => {


    const { validate } = useValidateUserLogued(true)
    const { onLogin } = useLogin()

    const { user, password, onInputChange } = useForm({
        user: '',
        mail: '',
        password: ''
    })

    useEffect(() => {
        validate(true)
    }, [])

    const onFormSubmit = (e) => {
        e.preventDefault()

        onLogin(user, password)
    }

    return (
        <>
            <AlertsContainer />

            <MainPage classes="flex justify-center items-center">

                <div className="w-2/3 h-2/3 bg-white shadow-md rounded-sm flex">

                    <section className="w-[60%] h-full">
                        <img src="bike.jpg" alt="bike img"
                            className="w-full h-full object-fill rounded-bl-sm rounded-tl-sm"
                        />
                    </section>

                    <form className="flex-1 p-3 h-full relative" onSubmit={onFormSubmit}>
                        <span className="flex justify-center">
                            <Title title="Iniciar sesión" />
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
                                value={password}
                                name="password"
                                type="password"
                                label="Contraseña"
                            />

                            <span className="flex gap-2 items-center ml-1">
                                <input type="checkbox" id="remember"
                                    className="w-4 h-4"
                                />
                                <label htmlFor="remember">Recordarme</label>
                            </span>

                            <span className="flex gap-1">
                                ¿No tienes una cuenta?
                                <NavLink to="/register"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    Crear una
                                </NavLink>
                            </span>

                            <button className="w-[90%] bg-gray-600 text-white rounded-sm h-10 absolute bottom-2 left-1/2 -translate-1/2 cursor-pointer hover:bg-gray-900 transition-colors">
                                Iniciar
                            </button>

                        </span>
                    </form>

                </div>
            </MainPage>
        </>
    )
}