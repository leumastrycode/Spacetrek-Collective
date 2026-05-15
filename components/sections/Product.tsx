"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Product() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoFiles = [
    "image 45.png", "image 31.png", "image 41.png", "image 44.png",
    "image 43.png", "image 36.png", "image 32.png", "image 40.png",
    "image 47.png", "image 33.png", "image 37.png", "image 46.png", 
    "image 34.png", "image 38.png", "image 35.png", "image 39.png",
  ];

  if (!mounted) return null;

  return (
    <section
      id="product"
      className="py-20 px-6 md:px-24 bg-transparent scroll-mt-[10px] relative min-h-[100dvh] overflow-hidden w-full snap-start flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="mb-16 text-white">
          <h2 className="font-roboto text-[#FFFFFF] text-[32px] md:text-[48px] leading-tight">
            Exploring Identity <span className="text-indigo-600">Through Design.</span>
          </h2>
          <h2 className="font-roboto text-[#FFFFFF] text-[32px] md:text-[48px] leading-tight mb-6">
            Work With Us
          </h2>
          <p className="font-roboto text-gray-400 max-w-[500px] text-[16px] md:text-[18px]">
            A curated collection of logo projects we&apos;ve crafted.
            Each representing a unique direction in building strong and future-ready brand identities.
          </p>
        </div>

        <div className="relative">

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-12 gap-y-8 md:gap-y-16 overflow-hidden transition-[max-height] duration-700 ease-in-out"
            style={{
              maxHeight: isExpanded ? "2000px" : "260px",
            }}
          >
            {logoFiles.map((fileName, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-transform hover:scale-110"
                style={{
                  filter: !isExpanded && index < 4 ? "blur(16px)" : "none",
                  transition: "filter 0.5s ease",
                }}
              >
                <Image
                  src={`/assets/${fileName}`}
                  alt={`Logo ${index}`}
                  width={312}
                  height={305}
                  className="object-contain w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-14 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="z-10 relative px-10 md:px-12 py-3 md:py-4 bg-white text-black font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] text-sm md:text-base"
          >
            {isExpanded ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>

      </div>
    </section>
  );
}