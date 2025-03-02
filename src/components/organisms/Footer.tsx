import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container mt-12 pb-5 text-center">
        <div className="flex gap-4 justify-center mb-4">
          <a
            rel="noreferrer noopener"
            href="https://www.youtube.com"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            <FaYoutube className="h-6 w-6" />
          </a>

          <a
            rel="noreferrer noopener"
            href="https://twitter.com"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            <FaTwitter className="h-6 w-6" />
          </a>

          <a
            rel="noreferrer noopener"
            href="https://www.instagram.com"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        <h3>
          &copy; 2025 Portfolio made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/foroozan-iraji/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Fonij
          </a>
          {" "}, Inspired by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/leoMirandaa/shadcn-landing-page"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Leo Miranda's Landing page
          </a>
        </h3>
      </section>
    </footer>
  );
};

export default Footer;
