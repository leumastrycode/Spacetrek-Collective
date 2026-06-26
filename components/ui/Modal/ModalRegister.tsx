"use client";
import Image from "next/image";
import { useEffect } from 'react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void; 
}

export default function ModalRegister({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) {

  useEffect(() => {
  if (isOpen) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
  return () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  };
}, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Kotak Form */}
      <div className="glass-effect justify-center text-black p-6 rounded-[10px] max-w-[600px] w-full shadow-2xl relative">
        {/* Tombol Close (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Form Register */}
        <form className="flex flex-col justify-center items-center w-full mt-[40px] gap-[30px]">
          <div className="relative inline-block w-full max-w-[450px]">
            <h2 className="text-[40px] w-full max-w-[450px] text-start text-indigo-100 font-roboto mb-4">
              <span className="text-indigo-600">Re</span>gister
            </h2>
            <Image
              src="/assets/vision-title-asset.svg"
              alt="Vision"
              width={300}
              height={200}
              className="w-14 h-16 absolute -top-[9px] -left-[29px] opacity-70 -z-10"
            />
          </div>
          <input
            type="text"
            placeholder="Full Name"
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
          />

          <p className="text-white text-[16px] justify-start w-full max-w-[450px]">
            Have an account?{" "}
            <span
              className="text-indigo-600 cursor-pointer hover:underline"
              onClick={onSwitchToLogin}
            >
              Sign in
            </span>
          </p>

          <div className="flex justify-start w-full max-w-[450px]">
            <button
              type="submit"
              className="bg-indigo-600 text-white p-3 rounded mt-[50px] mb-[20px] hover:bg-transparent hover:text-indigo-100 border border-indigo-600 transition-colors duration-300 "
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
