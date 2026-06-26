"use client";

import StarsWrapper from "@/components/ui/StarsWrapper";
import Step1 from "@/components/OrderSteps/Step1";
import Step2 from "@/components/OrderSteps/Step2";
import Step3 from "@/components/OrderSteps/Step3";
import Step4 from "@/components/OrderSteps/Step4";
import Step5 from "@/components/OrderSteps/Step5";
import OrderDraft from "@/components/OrderSteps/OrderDraft";
import SuccessModal from "@/components/ui/Modal/SuccesModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginModal from "@/components/ui/Modal/ModalLogin";

export default function OrderPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false) // 4. State modal sukses
  const router = useRouter();

  const [formData, setFormData] = useState({
    purpose: "",
    field: "",
    style: "",
    color: "",
    impression: "",
  });

  // State untuk status login (nanti diisi oleh data real Supabase)
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // State untuk mengontrol kemunculan modal kamu
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Fungsi untuk mengumpulkan data dari tiap step dan lanjut ke step berikutnya
  const handleNextStep = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  // Fungsi untuk mengupdate data tanpa pindah step
  const handleUpdateData = (updatedData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...updatedData }));
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
      saveOrderToAzure();
    }
  };

// Fungsi yang nanti akan diisi oleh tim backend kamu untuk koneksi ke Azure
const saveOrderToAzure = async () => {
  console.log("Mengirim data ini ke server Azure:", formData)
  
  // Nanti tim backend tinggal memasukkan logic fetch API Azure di sini
  
  // Munculkan modal sukses
  setShowSuccess(true)

  // Beri jeda 3,5 detik agar user bisa melihat animasinya, lalu pindah ke home
  setTimeout(() => {
    router.push('/')
  }, 3500)
}
  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-x-hidden overflow-y-auto scroll-smooth no-scrollbar">
      <StarsWrapper />
      {/* Back Button */}
      <div className="z-50 w-full flex-shrink-0 flex items-start justify-center overflow-hidden">
        <div className="w-full max-w-[600px] md:max-w-[1400px] mx-4 md:mx-[60px]">
          {currentStep > 1 && currentStep < 6 && (
            <button
              onClick={handlePrevStep}
              className=" mt-[100px] px-4 py-2 border-white/20 border-[1px] bg-transparent hover:scale-105 text-white rounded-[5px] transition-all duration-300 flex items-center gap-2"
            >
             <span className="group-hover:-translate-x-1 transition-transform">←</span> PREV <span className="text-indigo-600">PHASE</span>
            </button>
          )}
        </div>
      </div>
      <section className="min-h-[100dvh] w-full flex-shrink-0 flex items-start justify-center overflow-hidden mt-[20px] py-4">
        {currentStep === 1 ? (
          <Step1 onNext={(data) => handleNextStep({ purpose: data.purpose })} />
        ) : currentStep === 2 ? (
          <Step2 onNext={(data) => handleNextStep({ field: data.field })} />
        ) : currentStep === 3 ? (
          <Step3 onNext={(data) => handleNextStep({ style: data.style })} />
        ) : currentStep === 4 ? (
          <Step4 onNext={(data) => handleNextStep({ color: data.color })} />
        ) : currentStep === 5 ? (
          <Step5 onNext={(data) => handleNextStep({ impression: data.impression })} />
        ) : currentStep === 6 ? (
          <OrderDraft
            data={formData}
            onTransmit={handleTransmit}
            onUpdateData={handleUpdateData}
          />
        ) : null}
      </section>

      {/* 6. Render SuccessModal jika showSuccess bernilai true */}
      {showSuccess && <SuccessModal />}
    </div>
  );
}
