import FirstReason from "@/components/ui/ReasonItem/FirstReason";
import SecondReason from "@/components/ui/ReasonItem/SecondReason";
import ThirdReason from "@/components/ui/ReasonItem/ThirdReason";
import DotsRectangle from "@/assets-svgr/dots-rectangle4.svg";
import PatternBlock from "@/assets-svgr/pattern-block.svg";
import Star from "@/assets-svgr/star 29.svg";

export default function Reason() {
  return (
    <section id="reason">
      <div className="w-full flex flex-col justify-center items-center gap-[85px]">
        <div className="relative w-fit flex justify-center items-center">
          <Star className="absolute -top-[10px] -right-[30px]" />
          <h2 className=" font-roboto font-normal text-[48px] leading-[100%] tracking-[-0.03em] text-center text-[#E6EAF0]">
            Best
            <span className="text-[#3D2FFA]"> Reasoned </span>
            For Choose <br /> Our Product
          </h2>
        </div>
        <div className="relative flex justify-center gap-[100px] items-start flex-col min-[640px]:flex-row px-[30px]">
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
