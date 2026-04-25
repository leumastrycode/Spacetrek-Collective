import MissionCard from "../ui/MissionCard";
import VisionCard from "../ui/VisionCard";

export default function Vision() {
  return (
    <section id="vision">
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <VisionCard />
        <MissionCard />
      </div>
    </section>
  );
}
