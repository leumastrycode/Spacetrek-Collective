"use client";

import { useState, useEffect } from "react";
import ReasonWeb from "@/components/ui/ReasonSection/ReasonWeb";
import ReasonMobile from "@/components/ui/ReasonSection/ReasonMobile";

export default function Reason() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800); 
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="reason" className="min-h-[100dvh] md:h-screen overflow-visible w-full snap-start flex items-center justify-center">
      {isMobile ? <ReasonMobile /> : <ReasonWeb />}
    </section>
  );
}