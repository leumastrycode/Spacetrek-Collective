"use client";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { supabase } from "@/lib/supabase";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void; 
}

export default function ModalRegister({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (authError) {
      alert(authError.message);
      return;
    }

    if (!authData.user) {
      alert("Gagal mendapatkan data user.");
      return;
    }

    const { error } = await supabase
      .from("users")
      .insert([
      {
        id: authData.user.id,
        full_name: fullName,
        email: email,
      },
    ]);

    if (error) {
      alert(error.message);
      return ;
    }

    alert("Register berhasil! Silakan login.");

    // Kosongkan input
    setFullName("");
    setEmail("");
    setPassword("");

    // Pindah ke modal Login
    onSwitchToLogin();
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

        {/* Form Register */}
        <form 
        onSubmit={handleRegister}
        className="flex flex-col justify-center items-center w-full mt-[40px] gap-[30px]">
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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