import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/Auth/Login"
import { LoginLayOut } from "./Layout"
import { RegisterPage } from "../pages/Auth/Register"

export const MainRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LoginLayOut />}>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}