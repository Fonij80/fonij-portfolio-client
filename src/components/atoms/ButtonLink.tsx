import { buttonVariants } from "./button";

interface ButtonLinkProps {
    href: string;
    text: string;
    icon?: JSX.Element;
}

export const ButtonLink = ({ href, text, icon }: ButtonLinkProps) => {
    return (
        <a
            rel="noreferrer noopener"
            href={href}
            target="_blank"
            className={`border ${buttonVariants({ variant: "secondary" })}`}
        >
            {icon && (
                <span className="mr-2">
                    {icon}
                </span>
            )}
            {text}
        </a>
    );
};

export default ButtonLink;
