"use client";

import { useRouter } from "next/navigation";
import StarsWrapper from "@/components/ui/StarsWrapper";
import PatternBlock from "@/assets-svgr/pattern-block-profile2.svg";
import BackArrow from "@/assets-svgr/nav-arrow.svg";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authChange")); // tell Navbar & About the auth state changed
    router.push("/");
  };

  return (
    <div className="relative min-h-[100dvh] bg-[#0a0a0a] text-white overflow-x-hidden overflow-y-auto scroll-smooth no-scrollbar">
      <StarsWrapper />

      <div className="flex flex-col justify-center items-center px-4 py-10 md:py-20">
        <Link
          className="flex flex-row items-center justify-start gap-2 cursor-pointer w-full max-w-[800px] mb-5"
          href="/"
        >
          <BackArrow width={30} height={30} className="rotate-180 z-50" />
          <h2 className="text-white text-1xl md:text-2xl font-normal font-['inter'] leading-none hover:text-indigo-600">
            Back
          </h2>
        </Link>

        {/* Card */}
        <div className="glass-effect-no-hover p-5 md:p-10 rounded-xl max-w-[800px] w-full relative">
          <PatternBlock className="absolute bottom-0 right-0 pointer-events-none" />
          <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Profile
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-6">
            This is your profile page. You can update your information here.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 w-full max-w-md">
              <label className="text-sm md:text-base text-gray-400">
                This is your name
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  className="w-full bg-transparent text-white placeholder:text-gray-500 p-2.5 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm md:text-base"
                  placeholder="Enter your new username"
                />
                <button
                  type="button"
                  className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2.5 rounded text-sm md:text-base whitespace-nowrap"
                >
                  Update Name
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-md">
              <label className="text-sm md:text-base text-gray-400">
                This is your email
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  className="w-full bg-transparent text-white placeholder:text-gray-500 p-2.5 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm md:text-base"
                  placeholder="Enter your new email"
                />
                <button
                  type="button"
                  className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2.5 rounded text-sm md:text-base whitespace-nowrap"
                >
                  Update Email
                </button>
              </div>
            </div>
          </form>

          {/* Logout Button */}
          <div className="mt-10 pt-4 border-t border-transparent">
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded text-sm md:text-base font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}