import Company from "@/assets-svgr/company-logo.svg";
import Line from "@/assets-svgr/about-top-line.svg";
import PatternBlock from "@/assets-svgr/pattern-block2.svg";
import FadeIn from "../animations/FadeIn";
import Star from "@/assets-svgr/star 29.svg";

export default function About() {
  return (
    <section id="about" className="w-full py-[100px]">
      <div className="w-full flex flex-col justify-center gap-[155px]">
        <div className="relative flex justify-center">
          <Star className="absolute" />
          <h1 className="text-[48px] text-[#E6EAF0]">About</h1>
          <h1 className="text-[48px] text-[#3D2FFA] ml-2">Us</h1>
        </div>

        <div className="flex flex-row justify-between items-center px-[80px] gap-[80px] font-roboto">
          <FadeIn direction="right">
            <div className="max-w-[700px] w-full flex justify-center">
              <Company className="w-[282.51px] h-auto max-[950px]" />
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="relative max-w-[800px] w-full flex flex-col justify-center items-end text-right gap-[20px]">
              <div className="relative w-fit flex justify-end">
                <h2 className="text-[#E4E4E4] text-[28px] lg:text-[36px]">
                  Navigating brands through the universe of design
                </h2>
                <Line className="absolute -top-[50px] -right-[45px]" />
              </div>

              <PatternBlock className="absolute -top-[580px] -right-[200px] min-[1000px]:-right-[150px] min-[1240px]:-right-[80px]" />

              <p className="text-[#B0BAC5] text-[18px] lg:text-[22px] max-w-[688px]">
                SpaceTrek Collective is a creative design team focused on
                crafting distinctive and forward-thinking brand identities.
                Inspired by exploration and innovation, we help brands find
                their direction and translate it into clear, impactful visual
                designs.
              </p>

              <p className="text-[#B0BAC5] text-[18px] lg:text-[22px] max-w-[733px]">
                Every project is carefully crafted through a collaborative
                process, ensuring each identity is unique, purposeful, and built
                to stand out.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
