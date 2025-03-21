import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../molecules";
import { Navbar, Footer } from ".";

export default function NotFoundError() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </>
    );
}
