import { Outlet } from "react-router-dom";
import { Header } from "../pages/LayoutPage/Header";
import { Footer } from "../pages/LayoutPage/Footer";

export const LoginLayOut = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};


export const UserLayout = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};