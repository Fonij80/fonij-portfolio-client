import myImage from "@/assets/images/profile_image.png";
import { CustomWorldMap } from "@/components/ui/extra";
import { AboutMe } from "./AboutMe";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <CustomWorldMap />
      </div>

      <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:place-items-center py-20 md:py-32 gap-32 relative z-10 px-20 md:px-32">
        <AboutMe />

        {/* Profile Image */}
        <div className="overflow-hidden w-110 h-auto">
          <img
            src={myImage}
            alt="Foroozan Iraji"
            className="object-cover w-full h-full"
          />
        </div>
        {/* <div className="shadow"></div> */}
      </div>
    </section>
  );
};
