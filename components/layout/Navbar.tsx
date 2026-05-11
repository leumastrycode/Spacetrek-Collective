"use client";

import RowNavbar from "@/components/ui/RowNavbar"
import ColNavbar from "@/components/ui/ColNavbar"

export default function Navbar() {

  return (
    <section id="navbar">
      <div className="hidden sm:block">
        <RowNavbar />
      </div>

      <div className="block sm:hidden">
        <ColNavbar />
      </div>
    </section>
  );
}
