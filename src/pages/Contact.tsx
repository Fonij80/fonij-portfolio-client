import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { ContactForm } from "../components/ContactForm";


function Contact() {
    return (
        <>
            <Navbar />
            <ContactForm />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Contact;
