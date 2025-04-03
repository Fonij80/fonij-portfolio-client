import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../../molecules";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};
