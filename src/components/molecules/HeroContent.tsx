import { useTranslation } from "react-i18next";
import { Button } from "../atoms/button";

export const HeroContent = () => {
    const { t } = useTranslation();

    const scrollToSelectedSection = (sectionName: string) => {
        const section = document.getElementById(sectionName);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="text-center lg:text-start space-y-6">
            <main className="text-5xl md:text-6xl font-bold">
                <h1 className="inline">
                    I'm{" "}
                    <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                        Foroozan Iraji
                    </span>,{" "}
                    a
                </h1>{" "}
                <h2 className="inline">
                    <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                        Developer
                    </span>
                </h2>
            </main>

            <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                {t("hero.description")}
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4">
                <Button
                    className="w-full md:w-1/3"
                    onClick={() => scrollToSelectedSection("hire")}
                    disabled={true}
                >
                    {t("hero.hire_btn")}
                </Button>
                <Button
                    className="w-full md:w-1/3"
                    onClick={() => scrollToSelectedSection("about")}
                >
                    {t("hero.about_btn")}
                </Button>
            </div>
        </div>
    );
}
