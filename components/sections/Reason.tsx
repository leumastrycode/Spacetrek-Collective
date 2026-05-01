import Reason1 from "@/assets-svgr/asset-reason1.svg";
import Reason2 from "@/assets-svgr/asset-reason2.svg";
import Reason3 from "@/assets-svgr/asset-reason3.svg";
import Reason4 from "@/assets-svgr/asset-reason4.svg";

/* Yang kurang :
1. background
2. star
3. biar di tengah tengah
 */
export default function Reason() {
    return(
        <section id="reason">
            
            <div>
            <div className="mb-[50px]">
           {/* ketika diberi w dan h malah ke pinggir */}
            <h2 className="font-light font-roboto font-normal text-[48px] leading-[100%] tracking-[-0.03em] text-center text-[#E6EAF0]">Best 
                <span className="text-[#3D2FFA]"> Reasoned </span>
            For Choose <br /> Our Product</h2>
            </div>

            <div className="flex justify-center gap-[50px] text-center items-start flex-row">
            <div className="mb-[10px]">
                <div className="flex justify-center mb-[15px]">
                <div className="w-[63px] h-[63px]">
                <Reason1 />
                </div>
                </div>
            {/*kalau diberi w dan h malah mepet keatas*/}
            <h6 className="font-inter font-medium text-[26px] leading-[119%] tracking-[0.04em] text-center text-[#FFFFFF] mb-[10px] ">Explorative Approach</h6> {/*mb itu untuk apa*/}
            <p className="w-[286px] h-[78px] font-inter font-normal text-[22px] leading-[119%] tracking-[0.04em] text-center text-[#E6EAF0]">We go beyond the obvious to find unique design directions</p>
            </div>
            <div className="mb-[10px]">
                <div className="flex justify-center mb-[15px]">
                <div className="w-[63px] h-[63px]">
                <Reason2 />
                </div>
                </div>
            <h6 className="font-inter font-medium text-[26px] leading-[119%] tracking-[0.04em] text-center text-[#FFFFFF] mb-[10px]">Precision in Detail</h6>
            <p className="font-inter font-normal text-[22px] leading-[119%] tracking-[0.04em] text-center text-[#E6EAF0]">Every element is crafted with intention</p>
            </div>
            <div className="mb-[10px]">
                <div className="flex justify-center mb-[15px]">
                <div className="w-[63px] h-[63px]">
                <Reason3 />
                </div>
                </div>
            <h6 className="font-inter font-medium text-[26px] leading-[119%] tracking-[0.04em] text-center text-[#FFFFFF] mb-[10px]">Creative Thinking</h6>
            <p className="font-inter font-normal text-[22px] leading-[119%] tracking-[0.04em] text-center text-[#E6EAF0]">We turn ideas into strong visual identities</p>
            </div>
            </div>
            </div>
        </section>
        
    )
}