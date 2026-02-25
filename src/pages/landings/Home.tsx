import { HeroHome, AboutMe, Experiences, Projects, Skills } from "@/components";

export const Home = () => {
  return (
    <>
      <HeroHome />

      <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-16 px-6 pb-20 md:px-10 lg:px-12">
        <AboutMe />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Projects />
          <Skills />
        </div>

        <div className="grid gap-12 lg:grid-cols-[2fr,1fr] lg:items-start">
          <Experiences />
          {/* <div className="space-y-12">
            <ResumeSection />
            <ContactSection />
          </div> */}
        </div>
      </section>
    </>
  );
};
