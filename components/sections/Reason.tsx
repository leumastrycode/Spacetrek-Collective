import Reason1 from "@/assets-svgr/asset-reason1.svg";
import Reason2 from "@/assets-svgr/asset-reason2.svg";
import Reason3 from "@/assets-svgr/asset-reason3.svg";

export default function Reason() {
    return(
        <section id="reason">
            
            <div>
            <div className="mb-[50px]">
            <h2 className="font-light text-center font-roboto text-[#E6EAF0] text-[48px]">Best
                <span className="font-bold text-center font-roboto text-[#3D2FFA] text-[48px]"> Reasoned </span>
            For Choose Our Product</h2>
            </div>

            <div className="flex justify-center gap-[50px] text-center item-start flex-row">
            <div className="mb-[10px]">
                <div className="flex justify-center mb-[15px]">
                <div className="w-[63px] h-[63px]">
                <Reason1 />
                </div>
                </div>
            <h6 className="font-inter text-[26px] font-medium leading-[119%] tracking-[4%] align-left align-middle mb-[10px]">Explorative Approach</h6>
            <p className="text-gray-400 text-[22px] leading-relaxed">We go beyond the obvious to find unique design directions</p>
            </div>
            <div className="mb-[10px]">
                <div className="flex justify-center mb-[15px]">
                <div className="w-[63px] h-[63px]">
                <Reason2 />
                </div>
                </div>
            <h6 className="font-inter text-[26px] font-medium leading-[119%] tracking-[4%] align-left align-middle mb-[10px]">Precision in Detail</h6>
            <p className="text-gray-400 text-[22px] leading-relaxed">Every element is crafted with intention</p>
            </div>
            <div className="mb-[10px]">
                <div className="flex justify-center mb-[15px]">
                <div className="w-[63px] h-[63px]">
                <Reason3 />
                </div>
                </div>
            <h6 className="font-inter text-[26px] font-medium leading-[119%] tracking-[4%] align-left align-middle mb-[10px]">Creative Thinking</h6>
            <p className="text-gray-400 text-[22px] leading-relaxed">We turn ideas into strong visual identities</p>
            </div>
            </div>
            </div>
        </section>
        
    )
}