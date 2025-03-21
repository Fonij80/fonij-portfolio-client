import { Trans } from "react-i18next";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { IconLink } from "../atoms";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container mt-5 pb-5 text-center">
        <div className="flex gap-4 justify-center mb-4">
          <IconLink
            href="https://www.youtube.com"
            icon={<FaYoutube />}
          />

          <IconLink
            href="https://twitter.com"
            icon={<FaTwitter className="h-6 w-6" />}
          />

          <IconLink
            href="https://www.instagram.com"
            icon={<FaInstagram className="h-6 w-6" />}
          />
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
