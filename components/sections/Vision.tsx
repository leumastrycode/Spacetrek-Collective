import MissionCard from "../ui/MissionCard";
import VisionCard from "../ui/VisionCard";
import DotsRectangle from "@/assets-svgr/dots-rectangle2.svg";
import FadeIn from "../animations/FadeIn";

export default function Vision() {
  return (
    <section id="vision" className="min-h-[100dvh] md:h-screen overflow-hidden w-full snap-start flex items-center justify-center">
      <div className="w-full flex flex-col justify-center items-center gap-[120px]">
        <div className="w-full flex flex-row gap-0 min-[1220px]:gap-[80px] justify-center px-[30px] sm:px-[100px]">
          <FadeIn direction='right' delay={0.4}>
            <VisionCard />
          </FadeIn>
          <FadeIn direction='left' delay={0.4}>
            <DotsRectangle className="w-[350px] h-[400px] hidden min-[1220px]:block" />
          </FadeIn>
        </div>
        <div className="w-full flex flex-row gap-0 min-[1220px]:gap-[80px] justify-center px-[30px] sm:px-[100px]">
          <FadeIn direction='right' delay={0.4}>
            <DotsRectangle className="w-[350px] h-[400px] hidden min-[1220px]:block" />
          </FadeIn>
          <FadeIn direction='left' delay={0.4}>
            <MissionCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
