import Company from "@/assets-svgr/company-logo.svg";

export default function About() {
  return (
    <section id="about" className="w-full py-[100px]">

      <div className="flex justify-center mb-[80px]">
        <h1 className="text-[48px] text-[#E6EAF0]">About</h1>
        <h1 className="text-[48px] text-[#3D2FFA] ml-2">Us</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-[60px] lg:px-[120px] gap-[80px]">
        
    
        <div className="w-full lg:w-1/2 flex justify-start">
          <Company className="w-[282.51px] lg:w-[300px] h-auto" />
        </div>

       
        <div className="w-full lg:w-1/2 flex flex-col items-end text-right gap-[20px]">
          
          <h2 className="text-[#E4E4E4] text-[28px] lg:text-[36px]">
            Navigating brands through the universe of design
          </h2>

          <p className="text-[#B0BAC5] text-[18px] lg:text-[22px] max-w-[688px]">
            SpaceTrek Collective is a creative design team focused on crafting distinctive and forward-thinking brand identities. Inspired by exploration and innovation, we help brands find their direction and translate it into clear, impactful visual designs.
          </p>

          <p className="text-[#B0BAC5] text-[18px] lg:text-[22px] max-w-[733px]">
            Every project is carefully crafted through a collaborative process, ensuring each identity is unique, purposeful, and built to stand out.
          </p>

        </div>
      </div>
    </section>
  );
}