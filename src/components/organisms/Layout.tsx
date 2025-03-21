import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../molecules";
import { Navbar, Footer } from "./";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </>
    );
}
