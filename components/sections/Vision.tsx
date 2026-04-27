import MissionCard from "../ui/MissionCard";
import VisionCard from "../ui/VisionCard";
import DotsRectangle from "@/assets-svgr/dots-rectangle2.svg";

export default function Vision() {
  return (
    <section id="vision">
      <div className="w-full flex flex-col justify-center items-center gap-[120px]">
        <div className="w-full flex flex-row gap-[80px] justify-center px-[100px]">
          <VisionCard />
          <DotsRectangle className="w-[350px] h-[400px] hidden min-[1220px]:block" />
        </div>
        <div className="w-full flex flex-row gap-[80px] justify-center px-[100px]">
          <DotsRectangle className="w-[350px] h-[400px] hidden min-[1220px]:block" />
          <MissionCard />
        </div>
      </div>
    </section>
  );
}
