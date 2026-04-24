import CollectiveHeroStar from "@/components/ui/CollectiveHeroStar";

export default function Hero() {
  return (
    <section id="hero">
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col items-center w-fit justify-center mt-[400px] relative">
          <CollectiveHeroStar />
          <div className="flex flex-row ">
            <h1 className="font-plexMono text-gray-400 text-8xl font-normal tracking-[8.64px] leading-[65px] text-center">
              SUKMA
            </h1>
            <h1 className="font-plexMono text-indigo-600 text-8xl font-normal tracking-[8.64px] leading-[65px] text-center">
              TREK
            </h1>
          </div>
          <div className="w-full mt-[20px] justify-start flex flex-col gap-[5px]">
            <p className="font-inter text-gray-400 text-lg font-normal tracking-wide mt-4 w-full text-start">
              A collection of our logo products
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="126"
              height="6"
              viewBox="0 0 126 6"
              fill="none"
            >
              <path
                d="M-3.26633e-05 2.88672L2.88672 5.77347L5.77347 2.88672L2.88672 -3.26633e-05L-3.26633e-05 2.88672ZM125.773 2.88672L122.887 -3.26633e-05L120 2.88672L122.887 5.77347L125.773 2.88672ZM2.88672 2.88672V3.38672H122.887V2.88672V2.38672H2.88672V2.88672Z"
                fill="#E6EAF0"
                fill-opacity="0.5"
              />
            </svg>
          </div>
          <div className="w-96 h-80 bg-indigo-600/10 rounded-full border border-black blur-[120px] absolute -bottom-12.5 hover:blur-[160px] transition-all duration-300 "></div>
        </div>
      </div>
    </section>
  );
}
