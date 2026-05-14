"use client";

import { useState, useEffect } from "react";
import ReasonWeb from "@/components/ui/ReasonSection/ReasonWeb";
import ReasonMobile from "@/components/ui/ReasonSection/ReasonMobile";

export default function Reason() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800); // 640px adalah breakpoint 'sm' di Tailwind
    handleResize(); // Cek saat pertama kali load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="reason">
      {isMobile ? <ReasonMobile /> : <ReasonWeb />}
    </section>
  );
}