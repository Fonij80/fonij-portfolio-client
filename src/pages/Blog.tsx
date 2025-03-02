import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { Newsletter } from "../components/Newsletter";

function Blog() {
    return (
        <>
            <Navbar />
            <Newsletter />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Blog;
