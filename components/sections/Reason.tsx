import FirstReason from "@/components/ui/ReasonItem/FirstReason";
import SecondReason from "@/components/ui/ReasonItem/SecondReason";
import ThirdReason from "@/components/ui/ReasonItem/ThirdReason";

export default function Reason() {
  return (
    <section id="reason">
      <div className="w-full flex flex-col justify-center gap-[85px]">
        <h2 className="font-roboto font-normal text-[48px] leading-[100%] tracking-[-0.03em] text-center text-[#E6EAF0]">
          Best
          <span className="text-[#3D2FFA]"> Reasoned </span>
          For Choose <br /> Our Product
        </h2>
        <div className="flex justify-center  gap-[100px] items-start flex-row px-[30px]">
          <FirstReason />
          <SecondReason />
          <ThirdReason />
        </div>
      </div>
    </section>
  );
}
