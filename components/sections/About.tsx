import Company from "@/assets-svgr/company-logo.svg";
import Line from "@/assets-svgr/about-top-line.svg";
import PatternBlock from "@/assets-svgr/pattern-block2.svg";
import FadeIn from "../animations/FadeIn";
import Star from "@/assets-svgr/star 29.svg";
import StarLine from "@/assets-svgr/star-27.svg";

export default function About() {
  return (
    <section id="about" className="w-full py-[60px] md:py-[100px]">
      <div className="w-full flex flex-col justify-center gap-0 lg:gap-[155px]">

       
        <div className="flex justify-center">
          <div className="inline-flex flex-col">
            <div className="relative inline-flex items-center">
              <Star className="absolute -top-[4px] -left-[44px]" />
              <h1 className="text-[36px] md:text-[48px] text-[#E6EAF0]">About</h1>
              <h1 className="text-[36px] md:text-[48px] text-[#3D2FFA] ml-2">Us</h1>
            </div>
            <StarLine className="self-end translate-x-[30px]" />
          </div>
      </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 sm:px-10 md:px-[80px] lg:gap-[80px] font-roboto">

          
          

          
          <FadeIn direction="left">
              <div className="relative w-full lg:max-w-[800px] ml-auto flex flex-col items-end text-right gap-[20px]">

              <div className="relative w-fit flex justify-end">
                <h2 className="text-[#E4E4E4] text-[22px] sm:text-[28px]">
                Navigating brands through the universe of design
                </h2>
                <Line className="absolute -top-[50px] -right-[45px]" />
              </div>

            <PatternBlock className="absolute -top-[580px] -right-[80px]" />

            <p className="text-[#B0BAC5] text-[16px] sm:text-[18px]">
              SpaceTrek Collective is a creative design team focused oncrafting distinctive and forward-thinking brand identities.Inspired by exploration and innovation, we help brands find their direction and translate it into clear, impactful visual designs.
            </p>

            <p className="text-[#B0BAC5] text-[16px] sm:text-[18px]">
              Every project is carefully crafted through a collaborative  process, ensuring each identity is unique, purposeful, and built    to stand out.
            </p>
   
     
   
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}