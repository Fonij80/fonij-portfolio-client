import { ScrollToTop } from "../components/molecules";
import { Navbar, Hero, About, WorkExperience, Skills, Footer, Projects } from "../components/organisms";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <WorkExperience />
            <Skills />
            <Projects />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Home;
