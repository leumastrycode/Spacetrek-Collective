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
    <main>
      <section className="h-screen w-full snap-start flex-shrink-0">
        <Hero />
      </section>
      <section className="h-screen w-full snap-start flex-shrink-0">
        <About />
      </section>
      <section className="h-screen w-full snap-start flex-shrink-0">
        <Vision />
      </section>
      <section className="h-screen w-full snap-start flex-shrink-0">
        <Team />
      </section>
      <section className="h-screen w-full snap-start flex-shrink-0">
        <Reason />
      </section>
      <section className="h-screen w-full snap-start flex-shrink-0">
        <Product />
      </section>
    </main>
  );
}
