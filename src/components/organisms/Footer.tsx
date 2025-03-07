import { Trans, useTranslation } from "react-i18next";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const { t } = useTranslation();


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
          <Trans
            i18nKey="footer.copyright"
            values={{ year: 2025 }}
            components={{
              creator: (
                <a
                  href="https://www.linkedin.com/in/foroozan-iraji/"
                  className="text-primary hover:border-b-2"
                />
              ),
              inspiration: (
                <a
                  href="https://github.com/leoMirandaa/shadcn-landing-page"
                  className="text-primary hover:border-b-2"
                />
              )
            }}
          />
        </h3>
      </section>
    </footer>
  );
};

export default Footer;
