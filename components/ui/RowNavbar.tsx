"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import WaveUnderline from "@/components/ui/WaveUnderline";
import ArrowNav from "@/assets-svgr/nav-arrow.svg";

export default function RowNavbar() {
  const [open, setOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    };

    checkLogin(); // check on mount

    window.addEventListener("authChange", checkLogin); // same-tab updates
    window.addEventListener("storage", checkLogin); // cross-tab updates

    return () => {
      window.removeEventListener("authChange", checkLogin);
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  return (
    <section id="navbar">
      <div className="fixed top-[20px] w-full flex justify-end mt-20px z-50">
        <div
          className={`fixed w-auto bg-[#0f0f0f] flex flex-row
             justify-end items-center z-50 font-sans text-[20px] text-gray-400 rounded-tl-[50px] rounded-bl-[50px] glass-box overflow-hidden pl-[20px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              open ? "translate-x-0 opacity-100 ml-2" : "translate-x-[86%] ml-0"
            }`}
        >
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-center items-center"
          >
            <span
              className={`inline-block transition-transform duration-300 ${
                open ? "" : "rotate-180"
              }`}
            >
              <ArrowNav width={50} height={50} />
            </span>
          </button>
          <NavItem href="#hero">Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#vision">Vision</NavItem>
          <NavItem href="#team">Team</NavItem>
          <NavItem href="#product">Product</NavItem>
          {isLoggedIn && <NavItem href="/profile">Profile</NavItem>}
        </div>
      </div>
    </section>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative group p-[20px] hover:text-white transition-colors duration-300 overflow-hidden text-gray-400"
    >
      {children}
      <WaveUnderline />
    </Link>
  );
}