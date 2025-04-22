import { Routes, Route, Navigate } from "react-router"
import { useEffect } from "react"

import { useValidateUserLogued } from "../../hooks"

import { Home, Search, Add, Product, Perfil } from "../pages"
import { Header } from "../components"
import { MainPage, NotFound } from "../../ui/components"

export const AppRoutes = () => {

    const { validate } = useValidateUserLogued()

    useEffect(() => {

        validate()
    }, [])

    return (
        <>
            <MainPage>
                <Header />
                <Routes>
                    <Route path="/" element={< Navigate to="home" />} />
                    <Route path="/*" element={< NotFound />} />
                    <Route path="/home" element={< Home />} />
                    <Route path="/search" element={< Search />} />
                    <Route path="/add" element={< Add />} />
                    <Route path="/me" element={< Perfil />} />
                    <Route path="/product/:id" element={< Product />} />
                </Routes>
            </MainPage>
        </>
    )
}