import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Team from "@/components/sections/Team";
import Reason from "@/components/sections/Reason";
import Product from "@/components/sections/Product";

export const metadata = {
  title: "SpaceTrek Collective",
  description:
    "Discover your brand's identity with SpaceTrek Collective - a creative team specializing in future-focused design and distinctive branding.",
};

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <section className="w-full flex-shrink-0 flex items-center justify-center overflow-hidden min-h-screen md:min-h-[100dvh]">
        <Hero />
      </section>
      <section className="w-full flex-shrink-0 flex items-center justify-center overflow-hidden min-h-screen md:min-h-[100dvh]">
        <About />
      </section>
      <section className="w-full flex-shrink-0 flex items-center justify-center overflow-hidden min-h-screen md:min-h-[100dvh]">
        <Vision />
      </section>
      <section className="w-full flex-shrink-0 flex items-center justify-center overflow-hidden min-h-screen md:min-h-[100dvh]">
        <Team />
      </section>
      <section className="w-full flex-shrink-0 flex items-center justify-center overflow-hidden min-h-screen md:min-h-[100dvh]">
        <Reason />
      </section>
      <section className="w-full flex-shrink-0 flex items-center justify-center overflow-hidden min-h-screen md:min-h-[100dvh]">
        <Product />
      </section>
    </div>
  );
}
