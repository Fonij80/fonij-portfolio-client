import { CustomWorldMap, HeroContent, ProfileImage } from "../molecules";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <CustomWorldMap />

      <div className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 relative z-10">
        <HeroContent />
        <ProfileImage />
        <div className="shadow"></div>
      </div>
    </section>
  );
};