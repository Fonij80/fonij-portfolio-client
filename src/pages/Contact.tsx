import { ScrollToTop } from "../components/molecules";
import { Navbar, ContactForm, Footer } from "../components/organisms";

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
