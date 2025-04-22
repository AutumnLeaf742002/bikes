import { Routes, Route } from "react-router"

import { AppRoutes } from "../app/routes"
import { UsersProvider, UserProvider, AlertsProvider } from "../context"

import { Login, Register } from "../auth/pages"
import { Terms } from "../app/pages"

export const RootRouter = () => {

    return (
        <AlertsProvider>
            <UsersProvider>
                <UserProvider>
                    <Routes>
                        <Route path="/*" element={<AppRoutes />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="terms" element={< Terms />} />
                    </Routes>
                </UserProvider>
            </UsersProvider>
        </AlertsProvider>
    )
}