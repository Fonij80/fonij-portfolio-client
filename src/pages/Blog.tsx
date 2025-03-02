import { ScrollToTop } from "../components/molecules";
import { Navbar, Footer, Newsletter } from "../components/organisms";

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
