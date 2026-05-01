import MissionCard from "../ui/MissionCard";
import VisionCard from "../ui/VisionCard";
import DotsRectangle from "@/assets-svgr/dots-rectangle2.svg";
import FadeIn from "../animations/FadeIn";

export default function Vision() {
  return (
    <section id="vision" className="scroll-mt-[100px]">
      <div className="w-full flex flex-col justify-center items-center gap-[120px]">
        <div className="w-full flex flex-row gap-[80px] justify-center px-[100px]">
          <FadeIn delay={0.5} x={-20}>
            <VisionCard />
          </FadeIn>
          <FadeIn delay={0.5}>
            <DotsRectangle className="w-[350px] h-[400px] hidden min-[1220px]:block" />
          </FadeIn>
        </div>
        <div className="w-full flex flex-row gap-[80px] justify-center px-[100px]">
          <FadeIn delay={0.5} x={-20}>
            <DotsRectangle className="w-[350px] h-[400px] hidden min-[1220px]:block" />
          </FadeIn>
          <FadeIn delay={0.5}>
            <MissionCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
