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
    <div className="relative bg-[#0a0a0a] text-white overflow-x-hidden scroll-smooth md:h-[100dvh] md:overflow-y-auto md:snap-y md:snap-proximity">
      <StarsWrapper />
      <div className="relative z-10">
        <Navbar />
        <main className="w-full flex flex-col">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
