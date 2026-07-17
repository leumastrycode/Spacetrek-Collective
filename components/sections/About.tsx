'use client';

import { useState, useEffect } from 'react';
import Company from "@/assets-svgr/company-logo.svg";
import Line from "@/assets-svgr/about-top-line.svg";
import PatternBlock from "@/assets-svgr/pattern-block3.svg";
import FadeIn from "../animations/FadeIn";
import Star from "@/assets-svgr/star 29.svg";
import StarLine from "@/assets-svgr/star-27.svg";
import ModalRegister from "@/components/ui/Modal/ModalRegister"; 
import ModalLogin from "@/components/ui/Modal/ModalLogin"; 
import { supabase } from '@/lib/supabase';

export default function About() {
   const [activeModal, setActiveModal] = useState<'none' | 'register' | 'login'>('none');
   const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
     const checkLogin = async () => {
       const { data: authData } = await supabase.auth.getUser();
       setIsLoggedIn(!!authData?.user);
     };

     checkLogin(); // check on mount

     window.addEventListener("authChange", checkLogin); // same-tab updates

     const { data: listener } = supabase.auth.onAuthStateChange(() => {
       checkLogin();
     });

     return () => {
       window.removeEventListener("authChange", checkLogin);
       listener.subscription.unsubscribe();
     };
   }, []);

  return (
    <section
      id="about"
      className="py-[60px] md:py-[100px] min-h-[100dvh] md:h-screen overflow-hidden w-full snap-start flex items-center justify-center"
    >
      <div className="w-full flex flex-col justify-center gap-[155px]">
        <div className="flex justify-center">
          <div className="inline-flex flex-col">
            <div className="relative inline-flex items-center">
              <Star className="absolute -top-[4px] -left-[44px]" />
              <h1 className="text-[36px] md:text-[48px] text-[#E6EAF0]">
                About
              </h1>
              <h1 className="text-[36px] md:text-[48px] text-[#3D2FFA] ml-2">
                Us
              </h1>
            </div>
            <StarLine className="self-end translate-x-[30px]" />
          </div>
        </div>

        <div className="flex flex-row items-center px-6 sm:px-10 md:px-[80px] lg:justify-center lg:gap-[80px] font-roboto">
          <FadeIn direction="right">
            <div className="hidden min-[900px]:flex w-full lg:max-w-[700px] transition-opacity duration-300">
              <Company className="w-[180px] sm:w-[220px] md:w-[282px] h-auto" />
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="relative w-full flex flex-col items-end text-right gap-[20px] lg:max-w-[800px] min-w-0">
              <div className="relative w-fit flex lg:justify-end">
                <h2 className="text-[#E4E4E4] text-[22px] sm:text-[30px]">
                  Navigating brands through the universe of design
                </h2>
                <Line className="absolute max-[500px]:hidden -top-[50px] -right-[45px]" />
              </div>

              <PatternBlock className="absolute -top-[650px] -left-[300px]" />

              <p className="text-[#B0BAC5] text-[16px] sm:text-[20px]">
                SpaceTrek Collective is a creative design team focused
                oncrafting distinctive and forward-thinking brand
                identities.Inspired by exploration and innovation, we help
                brands find their direction and translate it into clear,
                impactful visual designs.
              </p>

              <p className="text-[#B0BAC5] text-[16px] sm:text-[20px]">
                Every project is carefully crafted through a collaborative
                process, ensuring each identity is unique, purposeful, and built
                to stand out.
              </p>
            </div>
            {!isLoggedIn && (
              <div className="flex justify-end mt-5">
                <button 
                  className="bg-[#3D2FFA] text-[#E6EAF0] py-3 px-6 rounded-md hover:bg-[#2A1FC7] transition-colors duration-300 z-40 text-[20px] sm:text-[18px] font-roboto"
                  onClick={() => setActiveModal('register')}
                >
                  Join Us
                </button> 
              </div>
            )}
          </FadeIn>
        </div>
      </div>
           {/* Modal Register */}
      <ModalRegister 
        isOpen={activeModal === 'register'} 
        onClose={() => setActiveModal('none')} 
        onSwitchToLogin={() => setActiveModal('login')} // Fungsi pindah ke login
      />

      {/* Modal Login */}
      <ModalLogin 
        isOpen={activeModal === 'login'} 
        onClose={() => setActiveModal('none')} 
        onSwitchToRegister={() => setActiveModal('register')} // Fungsi pindah ke register
      />
    </section>
  );
}