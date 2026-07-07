"use client";

import { useEffect,useState } from "react";
import Link from "next/link";
import WaveUnderline from "@/components/ui/WaveUnderline";
import ArrowNav from "@/assets-svgr/nav-arrow.svg";
import { supabase } from "@/lib/supabase";

export default function ColNavbar() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<"user" | "admin" | null>(null);
  
    useEffect(() => {
      const checkLogin = async () => {
        const { data: authData } = await supabase.auth.getUser();
  
        if (!authData?.user) {
          setRole(null);
          return;
        }
  
        const { data: profileData, error } = await supabase
          .from("users")
          .select("role")
          .eq("id", authData.user.id)
          .single();
  
        if (error || !profileData) {
          setRole(null);
          return;
        }
  
        setRole(profileData.role ?? "user");
      };
  
      checkLogin(); // check on mount
  
      window.addEventListener("authChange", checkLogin); // same-tab updates
  
      const { data: listener } = supabase.auth.onAuthStateChange(() => {
        checkLogin();
      });
  
      return () => {
        window.removeEventListener("authChange", checkLogin);
        listener.subscription.unsubscribe();
      };
    }, []);

  useEffect(() => {
    if (open) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return () => {
        document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <section id="navbar">
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-[20px] w-full flex justify-end z-50"
      >
        <span
          className={`inline-block transition-transform duration-300 ${
            open ? "" : "rotate-180"
          }`}
        >
          <ArrowNav width={50} height={50} />
        </span>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}

      <div className="fixed top-[20px] w-full flex justify-end mt-20px z-50">
        <div
          className={`fixed w-[200px] bg-[#0f0f0f] flex flex-col
             justify-start items-start mt-[70px] z-50 font-sans text-[20px] text-gray-400 rounded-tl-[10px] rounded-bl-[10px] glass-box overflow-hidden pl-[10px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              open ? "translate-x-0 opacity-100 ml-2" : "translate-x-[100%] ml-0"
            }`}
        >
          <NavItem href="#hero" onClick={() => setOpen(false)}>Home</NavItem>
          <NavItem href="#about" onClick={() => setOpen(false)}>About</NavItem>
          <NavItem href="#vision" onClick={() => setOpen(false)}>Vision</NavItem>
          <NavItem href="#team" onClick={() => setOpen(false)}>Team</NavItem>
          <NavItem href="#product" onClick={() => setOpen(false)}>Product</NavItem>
          {role === "admin" && <NavItem href="/Admin">Dashboard</NavItem>}
          {role === "user" && <NavItem href="/profile">Profile</NavItem>}
        </div>
      </div>
    </section>
  );
}

function NavItem({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group p-[20px] hover:text-white transition-colors duration-300 overflow-hidden text-gray-400"
    >
      {children}
      <WaveUnderline />
    </Link>
  );
}
