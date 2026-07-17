"use client";

import RowNavbar from "@/components/ui/RowNavbar"
import ColNavbar from "@/components/ui/ColNavbar"

export default function Navbar() {

  return (
    <section id="navbar">
      <div className="hidden z-50 sm:block">
        <RowNavbar />
      </div>

      <div className="block z-50 sm:hidden">
        <ColNavbar />
      </div>
    </section>
  );
}
