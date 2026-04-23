import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Team from "@/components/sections/Team";
import Reason from "@/components/sections/Reason";
import Product from "@/components/sections/Product"; 


export default function Home() {
    return (
        <main>           
            <Hero />
            <About />
            <Vision />
            <Team />
            <Reason />
            <Product />       
        </main>
    );
}