"use client";

import StarsWrapper from "@/components/ui/StarsWrapper";
import Step1 from "@/components/OrderSteps/Step1";
import Step2 from "@/components/OrderSteps/Step2";
import Step3 from "@/components/OrderSteps/Step3";
import { useState } from "react";
import LoginModal from "@/components/ui/Modal/ModalLogin";
import RegisterModal from "@/components/ui/Modal/ModalRegister";

export default function OrderPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    purpose: "",
    field: "",
    style: "",
    color: "",
    impression: "",
  });

  // State untuk status login (nanti diisi oleh data real Supabase)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State untuk mengontrol kemunculan modal kamu
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Fungsi untuk mengumpulkan data dari tiap step dan lanjut ke step berikutnya
  const handleNextStep = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  // Fungsi untuk kembali ke step sebelumnya
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Fungsi utama ketika user klik "Transmit Brief" di halaman akhir
  const handleTransmit = () => {
    if (!isLoggedIn) {
      // Jika belum login, buka modal login terlebih dahulu
      setShowLogin(true);
    } else {
      // Jika sudah login, langsung jalankan fungsi simpan ke Supabase
      saveOrderToSupabase();
    }
  };

  // Fungsi yang nanti akan diisi oleh tim backend kamu
  const saveOrderToSupabase = async () => {
    console.log("Mengirim data ini ke database Supabase:", formData);
    alert("Project Initiated! Data berhasil disimpan ke database.");
    // Di sini nanti ada proses redirect ke halaman admin atau client dashboard
  };
  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-x-hidden overflow-y-auto scroll-smooth no-scrollbar">
      <StarsWrapper />
      {/* Back Button */}
      <div className="z-50 w-full flex-shrink-0 flex items-start justify-center overflow-hidden">
        <div className="w-full max-w-[600px] md:max-w-[1400px] mx-4 md:mx-[60px]">
          {currentStep > 1 && (
            <button
              onClick={handlePrevStep}
              className=" mt-[100px] px-4 py-2 border-white border-[1px] bg-transparent hover:bg-indigo-700 text-white rounded-[5px] transition-colors "
            >
             <span className="group-hover:-translate-x-1 transition-transform">←</span> PREV PHASE
            </button>
          )}
        </div>
      </div>
      <section className="min-h-[100dvh] w-full flex-shrink-0 flex items-start justify-center overflow-hidden mt-[20px] py-4">
        {currentStep === 1 ? (
          <Step1 onNext={(data) => handleNextStep({ purpose: data.purpose })} />
        ) : currentStep === 2 ? (
          <Step2 onNext={(data) => handleNextStep({ field: data.field })} />
        ) : (
          <Step3 onNext={(data) => handleNextStep({ style: data.style })} />
        )}
      </section>
    </div>
  );
}
