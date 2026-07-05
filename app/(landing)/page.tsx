import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Team from "@/components/sections/Team";
import Reason from "@/components/sections/Reason";
import Product from "@/components/sections/Product";
import { div } from "framer-motion/client";

export const metadata = {
  title: "SpaceTrek Collective",
  description:
    "Discover your brand's identity with SpaceTrek Collective - a creative team specializing in future-focused design and distinctive branding.",
};

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <section
        className="min-h-[100dvh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden"
      >
        <Hero />
      </section>
      <section
        className="min-h-[100dvh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden py-16"
      >
        <About />
      </section>
      <section
        className="min-h-[100dvh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden py-16"
      >
        <Vision />
      </section>
      <section
        className="min-h-[100dvh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden py-16"
      >
        <Team />
      </section>
      <section
        className="min-h-[100dvh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden py-16"
      >
        <Reason />
      </section>
      <section
        className="min-h-[100dvh] w-full flex-shrink-0 flex items-center justify-center overflow-hidden py-16"
      >
        <Product />
      </section>
    </div>
  );
}
