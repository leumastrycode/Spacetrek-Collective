import FirstReason from "@/components/ui/ReasonItem/FirstReason";
import SecondReason from "@/components/ui/ReasonItem/SecondReason";
import ThirdReason from "@/components/ui/ReasonItem/ThirdReason";
import DotsRectangle from "@/assets-svgr/dots-rectangle3.svg";
import PatternBlock from "@/assets-svgr/pattern-block.svg";

export default function Reason() {
  return (
    <section id="reason">
      <div className="w-full flex flex-col justify-center gap-[85px]">
        <h2 className="font-roboto font-normal text-[48px] leading-[100%] tracking-[-0.03em] text-center text-[#E6EAF0]">
          Best
          <span className="text-[#3D2FFA]"> Reasoned </span>
          For Choose <br /> Our Product
        </h2>
        <div className="relative flex justify-center gap-[100px] items-start flex-row px-[30px]">
          <FirstReason />
          <SecondReason />
          <ThirdReason />
          <DotsRectangle className="absolute -top-[300px] z-[-1]" />
          <PatternBlock className="absolute -bottom-[500px] z-[-1]" />
        </div>
      </div>
    </section>
  );
}
