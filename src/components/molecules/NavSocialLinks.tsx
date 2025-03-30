import { useTranslation } from "react-i18next";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ButtonLink } from "../atoms";

export const NavSocialLinks = () => {
    const { t } = useTranslation();

    return (
        <>
            <ButtonLink
                href="https://github.com/Fonij80"
                text={t("navbar.github")}
                icon={<GitHubLogoIcon className="mr-2 w-5 h-5" />}
            />
            <ButtonLink
                href="https://www.linkedin.com/in/foroozan-iraji/"
                text={t("navbar.linkedin")}
                icon={<LinkedInLogoIcon className="mr-2 w-5 h-5" />}
            />
        </>
    )
}