"use client";

import { useRouter } from "next/navigation";
import StarsWrapper from "@/components/ui/StarsWrapper";
import PatternBlock from "@/assets-svgr/pattern-block-profile2.svg";
import BackArrow from "@/assets-svgr/nav-arrow.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfileAdmin() {
  const router = useRouter();

  const [user, setUser] = useState(() => {
    if (typeof window === "undefined") return { full_name: "", email: "" };
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { full_name: "", email: "" };
  });

  const [newName, setNewName] = useState(user.full_name ?? "");
  const [newEmail, setNewEmail] = useState(user.email ?? "");

  useEffect(() => {
    const fetchUser = async () => {
      const { data: authData } = await supabase.auth.getUser();
      if (!authData?.user) return;

      const { data: profileData, error } = await supabase
        .from("users")
        .select("full_name, email")
        .eq("id", authData.user.id)
        .single();

      if (error || !profileData) {
        console.error("Gagal ambil profile:", error?.message);
        return;
      }

      setUser({
        full_name: profileData.full_name ?? "",
        email: profileData.email ?? "",
      });
      setNewName(profileData.full_name ?? "");
      setNewEmail(profileData.email ?? "");
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authChange")); // tell Navbar & About the auth state changed
    router.push("/");
  };

  const handleUpdateName = async () => {
    if (!newName.trim()) {
      alert("Nama tidak boleh kosong.");
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    const { error } = await supabase
      .from("users")
      .update({
        full_name: newName,
      })
      .eq("id", storedUser.id);

    if (error) {
      alert(error.message);
      return;
    }

    const updatedUser = {
      ...storedUser,
      full_name: newName,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    setUser(updatedUser);
    setNewName(updatedUser.full_name);

    alert("Nama berhasil diubah.");
  };

  const [updatingEmail, setUpdatingEmail] = useState(false);

  const handleUpdateEmail = async () => {
    console.log("newEmail saat submit:", newEmail);
    console.log("user.email saat ini:", user.email);

    if (!newEmail.trim()) {
      alert("Email tidak boleh kosong.");
      return;
    }

    setUpdatingEmail(true);

    const { error: authError } = await supabase.auth.updateUser({
      email: newEmail,
    });

    if (authError) {
      console.error("message:", authError.message);
      console.error("status:", authError.status);
      console.error("code:", authError.code);
      alert(authError.message);
      setUpdatingEmail(false);
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const { error: dbError } = await supabase
      .from("users")
      .update({ email: newEmail })
      .eq("id", storedUser.id || user.id);

    if (dbError) {
      alert(
        "Auth terupdate, tapi gagal update tabel users: " + dbError.message,
      );
      setUpdatingEmail(false);
      return;
    }

    const updatedUser = { ...storedUser, email: newEmail };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);

    setUpdatingEmail(false);
    alert("Email berhasil diubah.");
  };

  return (
    <div className="relative min-h-[100dvh] bg-[#0a0a0a] text-white overflow-x-hidden overflow-y-auto scroll-smooth no-scrollbar">
      <StarsWrapper />

      <div className="flex flex-col justify-center items-center px-4 py-10 md:py-20">
        {/* Card */}
        <div className="glass-effect-no-hover p-5 md:p-10 rounded-xl max-w-[800px] w-full relative">
          <PatternBlock className="absolute bottom-0 right-0 pointer-events-none" />
          <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Profile Admin
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-6">
            This is your profile page. You can update your information here.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 w-full max-w-md">
              <label className="text-sm md:text-base text-gray-400">
                This is your name
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-transparent text-white placeholder:text-gray-500 p-2.5 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm md:text-base"
                />
                <button
                  type="button"
                  onClick={handleUpdateName}
                  className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2.5 rounded text-sm md:text-base whitespace-nowrap"
                >
                  Update Name
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-md">
              <label className="text-sm md:text-base text-gray-400">
                This is your email
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full bg-transparent text-white placeholder:text-gray-500 p-2.5 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm md:text-base"
                  placeholder="Enter your new email"
                />
                <button
                  type="button"
                  onClick={handleUpdateEmail}
                  disabled={updatingEmail}
                  className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2.5 rounded text-sm md:text-base whitespace-nowrap"
                >
                  {updatingEmail ? "Updating..." : "Update Email"}
                </button>
              </div>
            </div>
          </form>

          {/* Logout Button */}
          <div className="mt-10 pt-4 border-t border-transparent">
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded text-sm md:text-base font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
