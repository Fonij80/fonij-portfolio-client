import { About } from "../components/About";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { WorkExperience } from "../components/WorkExperience";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { Projects } from "../components/Projects";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <WorkExperience />
            <Features />
            <Projects />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Home;
