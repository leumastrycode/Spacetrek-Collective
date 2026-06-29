"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export default function ModalLogin({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    // Email tidak ditemukan
    if (error || !data) {
        alert("Email tidak ditemukan.");
      return;
    }

    // Password salah
    if (data.password !== password) {
      alert("Password salah.");
      return;
    }

    // Login berhasil
    alert(`Selamat datang, ${data.full_name}!`);
  };

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

        {/* Form Login */}
        <form 
        onSubmit={handleLogin}
        className="flex flex-col justify-center items-center w-full mt-[40px] gap-[30px]">
          <div className="relative inline-block w-full max-w-[450px]">
            <h2 className="text-[40px] w-full max-w-[450px] text-start text-indigo-100 font-roboto mb-4">
              <span className="text-indigo-600">Lo</span>gin
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
          />

          <p className="text-white text-[16px] justify-start w-full max-w-[450px]">
            Don&apos;t have an account?{" "}
            <span
              className="text-indigo-600 cursor-pointer hover:underline"
              onClick={onSwitchToRegister}
            >
              Sign up
            </span>
          </p>

          <div className="flex justify-start w-full max-w-[450px]">
            <button
              type="submit"
              className="bg-indigo-600 text-white p-3 rounded mt-[50px] mb-[20px] hover:bg-transparent hover:text-indigo-100 border border-indigo-600 transition-colors duration-300 "
            >
              Login Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
