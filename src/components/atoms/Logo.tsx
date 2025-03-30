import logoImage from "../../assets/logo2.png";

export const Logo = () => {
    return (
        <a
            rel="noreferrer noopener"
            href="/"
            className="ml-2 font-bold text-xl flex items-center"
        >
            <img src={logoImage} alt="Logo" className="h-20 w-auto" />
        </a>
    )
}