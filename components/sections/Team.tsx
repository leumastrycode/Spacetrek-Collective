import LineAsset from "@/assets-svgr/team-tittle-asset.svg";
import Orbit3 from "@/assets-svgr/orbit-3.svg";
import Orbit4 from "@/assets-svgr/orbit-4.svg";
import DummyPicture from "@/assets-svgr/dummy-picture.svg";
import IndigoStar from "@/assets-svgr/indigo-blur-star2.svg";
import Image from "next/image";

export default function Team() {
  return (
    <section id="team">
      <div className="flex w-full justify-center items-center px-[70px]">
        <div className="relative flex flex-col pt-[75px] justify-between glass-effect overflow-hidden w-full max-w-[1220px] h-[800px]">
          <div className="flex flex-row gap-[100px] w-full h-fit pl-[90px]">
            <div className="flex flex-col gap-[75px] w-full max-w-[610px]">
              <div className="relative flex flex-col gap-[0px]">
                <div className="flex flex-col gap-[0px]">
                  <h2 className="font-roboto text-gray-400 text-5xl font-normal">
                    OUR
                    <span className="font-roboto text-indigo-600 text-5xl font-normal">
                      TEAM
                    </span>
                  </h2>
                  <p className="justify-start text-gray-400 text-xl font-normal font-roboto font-tracking-wide">
                    PROFILE
                  </p>
                </div>
                <LineAsset className="absolute -left-[50px] -bottom-[40px]" />
              </div>
              <p className="text-gray-400 text-2xl font-normal font-inter leading-9 tracking-wide max-w-[550px]">
                SpaceTrek Collective is a creative team focused on building
                distinctive logo identities. Inspired by space exploration, we
                help brands discover their direction and transform it into
                clear, impactful visuals.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/dummy-picture.svg"
                alt="John Doe"
                width={300}
                height={400}
                className="mt-[60px] w-[300px] h-auto"
                style={{ height: 'auto' }}
                priority
              ></Image>
              <p className="text-gray-400 text-xl font-normal font-roboto">
                John Doe
              </p>
            </div>
          </div>
          <div className="relative flex justify-start items-center w-full h-[160px] black-glass-effect pl-[120px]">
            <Orbit4 className="absolute -left-[0px] -bottom-[-5px]" />
            <div className="absolute -top-[10px] flex flex-row gap-[80px] max-w-[700px]">
              <DummyPicture className="dummy-picture" />
              <DummyPicture className="dummy-picture" />
              <DummyPicture className="dummy-picture" />
              <DummyPicture className="dummy-picture" />
            </div>
          </div>
          <Orbit3 className="absolute -left-[2px] -bottom-[-72px]" />
          <IndigoStar className="absolute -right-[900px] -top-[-30px] -z-10" />
        </div>
      </div>
    </section>
  );
}
