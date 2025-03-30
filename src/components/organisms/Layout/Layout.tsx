import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../../molecules";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </>
    );
}
