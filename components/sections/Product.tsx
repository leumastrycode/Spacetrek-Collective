"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Product() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const logoFiles = [
    "image 45.png", "image 31.png", "image 41.png", "image 44.png",
    "image 43.png", "image 36.png", "image 32.png", "image 40.png",
    "image 47.png", "image 33.png", "image 37.png", "image 46.png",
    "image 34.png", "image 38.png", "image 35.png", "image 39.png",
  ];

  if (!mounted) return null;

  const blurFadeOverlay =
    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.12) 38%, rgba(0,0,0,0.5) 58%, rgba(0,0,0,0.85) 76%, rgba(0,0,0,0.96) 100%)";

  return (
    <section
      id="product"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-24 bg-transparent scroll-mt-[10px] relative min-h-[100dvh] overflow-hidden w-full snap-start flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="mb-6 sm:mb-8 md:mb-16 text-white">
          <h2 className="font-roboto text-[#FFFFFF] text-[20px] sm:text-[28px] md:text-[48px] leading-tight">
            Exploring Identity{" "}
            <span className="text-indigo-500">Through Design.</span>
          </h2>
          <h2 className="font-roboto text-[#FFFFFF] text-[20px] sm:text-[28px] md:text-[48px] leading-tight mb-2 sm:mb-3 md:mb-6">
            Work With Us
          </h2>
          <p className="font-roboto text-gray-400 max-w-[480px] text-[11px] sm:text-[13px] md:text-[18px] leading-relaxed">
            A curated collection of logo projects we&apos;ve crafted.
            Each representing a unique direction in building strong and future-ready brand identities.
          </p>
        </div>

        <div className="block md:hidden relative">

          <div className="grid grid-cols-2 gap-2 mb-2">
            {logoFiles.slice(0, 2).map((fileName, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md bg-[#111]"
                style={{ height: "140px" }}
              >
                <Image
                  src={`/assets/${fileName}`}
                  alt={`Logo ${index}`}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>

          <div
            className="relative overflow-hidden"
            style={{ height: isExpanded ? "140px" : "70px" }}
          >
            <div className="grid grid-cols-2 gap-2">
              {logoFiles.slice(2, 4).map((fileName, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-md bg-[#111]"
                  style={{ height: "140px" }}
                >
                  <Image
                    src={`/assets/${fileName}`}
                    alt={`Logo ${index + 2}`}
                    fill
                    className="object-contain p-4"
                    style={{
                      filter: isExpanded ? "none" : "blur(4px)",
                      transform: isExpanded ? "scale(1)" : "scale(1.05)",
                      transition: "filter 0.4s ease, transform 0.4s ease",
                    }}
                  />

                  {!isExpanded && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.95) 100%)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {!isExpanded && (
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "50px",
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 100%)",
                }}
              />
            )}
          </div>

          {isExpanded && (
            <div className="grid grid-cols-2 gap-2 mt-2">
              {logoFiles.slice(4).map((fileName, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-md bg-[#111]"
                  style={{ height: "140px" }}
                >
                  <Image
                    src={`/assets/${fileName}`}
                    alt={`Logo ${index + 4}`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:block relative overflow-hidden">

          <div className="grid grid-cols-4 gap-x-10 mb-14">
            {logoFiles.slice(0, 4).map((fileName, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-sm bg-[#111] transition-transform hover:scale-105"
                style={{ height: "254px" }}
              >
                <Image
                  src={`/assets/${fileName}`}
                  alt={`Logo ${index}`}
                  fill
                  className="object-contain p-6"
                />
              </div>
            ))}
          </div>

          <div
            className="relative"
            style={{
              height: isExpanded ? "254px" : "127px",
              overflow: "hidden",
            }}
          >
            <div className="grid grid-cols-4 gap-x-10">
              {logoFiles.slice(4, 8).map((fileName, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-sm bg-[#111] transition-transform hover:scale-105"
                  style={{ height: "254px" }}
                >
                  <Image
                    src={`/assets/${fileName}`}
                    alt={`Logo ${index + 4}`}
                    fill
                    className="object-contain p-6"
                    style={{
                      filter: isExpanded ? "none" : "blur(7px)",
                      transform: isExpanded ? "scale(1)" : "scale(1.05)",
                      transition: "filter 0.4s ease, transform 0.4s ease",
                    }}
                  />
                  {!isExpanded && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.97) 100%)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {!isExpanded && (
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "70px",
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 100%)",
                }}
              />
            )}
          </div>

          {isExpanded && (
            <div className="grid grid-cols-4 gap-x-10 gap-y-14 mt-14">
              {logoFiles.slice(8).map((fileName, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-sm bg-[#111] transition-transform hover:scale-105"
                  style={{ height: "254px" }}
                >
                  <Image
                    src={`/assets/${fileName}`}
                    alt={`Logo ${index + 8}`}
                    fill
                    className="object-contain p-6"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 sm:mt-7 md:mt-14 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="z-10 relative px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 md:py-4 bg-white text-black font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] text-[11px] sm:text-sm md:text-base tracking-widest"
          >
            {isExpanded ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>

      </div>
    </section>
  );
}