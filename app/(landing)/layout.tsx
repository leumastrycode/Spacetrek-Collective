import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarsWrapper from "@/components/ui/StarsWrapper";
import "../globals.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-x-hidden overflow-y-auto scroll-smooth no-scrollbar">
      <StarsWrapper />
      <div className="relative z-10">
        <Navbar />
        <main className="w-full flex flex-col">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
