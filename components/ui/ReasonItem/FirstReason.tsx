import Reason1 from "@/assets-svgr/asset-reason1.svg";

export default function FirstReason() {
  return (
    <div className="flex flex-col w-full max-w-[330px] gap-[20px] justify-center items-center">
      <Reason1 />
      <h3 className="font-inter font-medium text-[24px] md:text-[26px] leading-[119%] tracking-[0.04em] text-center text-[#FFFFFF] mb-[10px]">
        Explorative Approach
      </h3>
      <p className="font-inter font-normal text-[20px] md:text-[22px] leading-[119%] tracking-[0.04em] text-center text-[#E6EAF0]">
        We go beyond the obvious to find unique design directions
      </p>
    </div>
  );
}
