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
    <div className="relative bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
      <StarsWrapper />
      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
