import Reason2 from "@/assets-svgr/asset-reason2.svg";

export default function SecondReason() {
  return (
    <div className="flex flex-col w-full max-w-[330px] gap-[20px] justify-center items-center">
      <Reason2 />
      <h3 className="font-inter font-medium text-[26px] leading-[119%] tracking-[0.04em] text-center text-[#FFFFFF] mb-[10px]">
        Precision in Detail
      </h3>
      <p className="font-inter font-normal text-[22px] leading-[119%] tracking-[0.04em] text-center text-[#E6EAF0]">
        Every element is crafted with intention
      </p>
    </div>
  );
}
