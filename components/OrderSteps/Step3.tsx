"use client";

import { useState } from "react";
import Line from "@/assets-svgr/Initiate-Line.svg";

interface Step3Props {
  onNext: (data: { style: string }) => void;
}

export default function Step3({ onNext }: Step3Props) {
  // Array pilihan jawaban agar code lebih rapi
  const options = [
    {
      label: "Minimalist & Sleek: Clean, simple, elegant, reminiscent of premium tech brands",
      value: "Minimalist",
    },
    { label: "Cyberpunk & Edgy: Bold, sharp, energetic, with a futuristic dystopian feel.", value: "Cyberpunk" },
    { label: "Sci-Fi & Space: Themed around outer space, astronomy, or cosmic elements of the galaxy.", value: "Sci-Fi & Space" },
    { label: "Synthwave / Retro-Futurism: An ’80s-style futuristic vibe, full of bright colors and nostalgia for old-school computers.", value: "Synthwave / Retro-Futurism" },
  ];

  const [customText, setCustomText] = useState("");

  // Fungsi jika user memilih dari opsi grid yang ada (Auto-Advance)
  const handleSelectOption = (value: string) => {
    onNext({ style: value });
  };

  // Fungsi jika user memilih mengisi custom text dan klik tombol Next
  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customText.trim() !== "") {
      onNext({ style: customText });
    }
  };

  return (
    <div className="w-full max-w-[600px] md:max-w-[1400px] flex flex-col items-start justify-center gap-6 mx-4 md:mx-[60px] mb-[80px]">
   

      {/* Form */}
      <div className="glass-effect-no-hover justify-center text-black rounded-[10px] max-w-[600px] md:max-w-[1400px] w-full shadow-2xl relative p-6 sm:p-10 md:p-[90px]">
        {/* Title */}
        <div className="self-stretch h-12 justify-center relative">
          <span className="text-indigo-600 text-[18px] sm:text-[24px] md:text-[40px] font-normal font-['Roboto'] leading-none">
            Initiate
          </span>
          <span className="text-slate-200/90 text-[18px] sm:text-[24px] md:text-[40px] font-normal font-['Roboto'] leading-none">
            {" "}
            Project
          </span>
            <Line className="absolute -bottom-[20px] left-[128px] w-full" />
        </div>
        {/* Progress Bar */}
        <div className="flex flex-row items-center gap-3 sm:gap-5 self-stretch h-5 mt-[80px]">
          <div className="w-full md:max-w-[360px] h-4 bg-indigo-600/20 border-white border-[1px] rounded-[0]">
            <div className="w-[60%] h-full bg-indigo-700 rounded-[0]" />
          </div>
          <p className="text-slate-200/90 text-[14px] md:text-[18px] font-normal font-['Roboto'] leading-none">
            3/5
          </p>
        </div>

        {/* Question */}
        <p className="stretch justify-center text-white text-[18px] sm:text-[22px] md:text-[28px] font-normal font-['Inter'] leading-normal mt-[36px]">
          What style best represents your project?
        </p>

        {/* Options */}
        <div className="flex flex-col w-full md:max-w-[980px] gap-4 sm:gap-5 mt-[24px]">
          {options.map((option) => (
            <button
              key={option.value}
              className="bg-transparent hover:bg-indigo-700 text-start text-white border-indigo-600 border-[1px] font-roboto text-[16px] sm:text-[18px] md:text-[22px] py-[14px] px-[24px] sm:py-[16px] sm:px-[32px] rounded-[5px] transition duration-300"
              onClick={() => handleSelectOption(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Custom Input */}
        <p className="stretch justify-center text-white text-[16px] sm:text-[18px] md:text-[22px] font-normal font-['Inter'] leading-normal mt-[36px] mb-[10px]">
          Custom Style
        </p>
        <form onSubmit={handleCustomSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full md:max-w-[980px]">
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Type your custom style here..."
            className="flex-1 bg-transparent border-indigo-600 border-[1px] text-white font-roboto text-[16px] sm:text-[18px] md:text-[22px] py-[14px] px-[18px] sm:py-[16px] sm:px-[24px] rounded-[5px] placeholder:text-gray-500 placeholder:italic focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition duration-300 placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[18px]"
          />
          <button
            type="submit"
            disabled={!customText.trim()}
            className="disabled:bg-transparent disabled:border-white disabled:border-[1px] bg-indigo-600 hover:bg-indigo-700 text-white font-roboto text-[16px] sm:text-[18px] md:text-[22px] py-[14px] px-[24px] sm:py-[16px] sm:px-[28px] rounded-[5px] transition duration-300"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
