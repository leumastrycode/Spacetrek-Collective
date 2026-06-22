import Reason3 from "@/assets-svgr/asset-reason3.svg";

export default function ThirdReason() {
  return (
    <div className="flex flex-col w-full max-w-[330px] gap-[10px] sm:gap-[20px] justify-center items-center">
      <Reason3 />
      <h3 className="font-inter font-medium text-[24px] md:text-[26px] leading-[119%] tracking-[0.04em] text-center text-[#FFFFFF] mb-[10px]">
        Creative Thinking
      </h3>
      <p className="font-inter font-normal text-[20px] md:text-[22px] leading-[119%] tracking-[0.04em] text-center text-[#E6EAF0]">
        We turn ideas into strong visual identities
      </p>
    </div>
  );
}
