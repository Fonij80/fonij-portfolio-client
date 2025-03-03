import { ScrollToTop } from "../components/molecules";
import { Navbar, Hero, About, Footer } from "../components/organisms";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Home;
