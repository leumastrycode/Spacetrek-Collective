import FirstReason from "@/components/ui/ReasonItem/FirstReason";
import SecondReason from "@/components/ui/ReasonItem/SecondReason";
import ThirdReason from "@/components/ui/ReasonItem/ThirdReason";
import DotsRectangle from "@/assets-svgr/dots-rectangle4.svg";
import PatternBlock from "@/assets-svgr/pattern-block.svg";
import Star from "@/assets-svgr/star 29.svg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ReasonMobile() {
  const autoplayOptions = { delay: 3000, stopOnInteraction: false };
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [Autoplay(autoplayOptions)]
  );

  return (
    <section id="reason">
      <div className="w-full flex flex-col justify-center items-center gap-[85px]">
        <div className="relative w-fit flex justify-center items-center">
          <Star className="absolute -top-[20px] -right-[20px] max-[434px]:-top-[20px] max-[434px]:-right-[20px]" />
          <h2 className="px-[20px] font-roboto font-normal text-[35px] max-[434px]:text-[23px] sm:text-[40px] md:text-[48px] leading-[100%] tracking-[-0.03em] text-center text-[#E6EAF0]">
            Best
            <span className="text-[#3D2FFA]"> Reasoned </span>
            For Choose <br /> Our Product
          </h2>
        </div>

        <div className="relative flex justify-center flex-row">
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex">
              <div className="flex-[0_0_90%] sm:flex-[0_0_60%] min-w-0 px-2 flex justify-center">
                <div className="w-full max-w-sm flex justify-center">
                  <FirstReason />
                </div>
              </div>

              <div className="flex-[0_0_90%] sm:flex-[0_0_60%] min-w-0 px-2 flex justify-center">
                <div className="w-full max-w-sm flex justify-center">
                  <SecondReason />
                </div>
              </div>

              <div className="flex-[0_0_90%] sm:flex-[0_0_60%] min-w-0 px-2 flex justify-center">
                <div className="w-full max-w-sm flex justify-center">
                  <ThirdReason />
                </div>
              </div>
            </div>
          </div>
          <DotsRectangle className="absolute -top-[300px] z-[-1]" />
          <PatternBlock className="absolute -bottom-[500px] z-[-1]" />
        </div>
      </div>
    </section>
  );
}
