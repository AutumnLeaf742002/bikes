import { Routes, Route, Navigate } from "react-router"
import { useEffect } from "react"

import { useValidateUserLogued } from "../../hooks"
import { CartProvider, ProductsProvider } from "../../context"

import { Home, Search, Add, Product, Perfil, Cart } from "../pages"
import { Header } from "../components"
import { MainPage, NotFound } from "../../ui/components"
import {  } from "../pages/Cart"

export const AppRoutes = () => {

    const { validate } = useValidateUserLogued()

    useEffect(() => {

        validate()
    }, [])

    return (
        <>
            <ProductsProvider>
                <CartProvider>
                    <MainPage>
                        <Header />
                        <Routes>
                            <Route path="/" element={< Navigate to="home" />} />
                            <Route path="/*" element={< NotFound />} />
                            <Route path="/home" element={< Home />} />
                            <Route path="/search" element={< Search />} />
                            <Route path="/add" element={< Add />} />
                            <Route path="/cart" element={< Cart />} />
                            <Route path="/me" element={< Perfil />} />
                            <Route path="/product/:id" element={< Product />} />
                        </Routes>
                    </MainPage>
                </CartProvider>
            </ProductsProvider>
        </>
    )
}