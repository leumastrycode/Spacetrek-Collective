'use client';

import StarsWrapper from "@/components/ui/StarsWrapper";
import DashboardNav from "@/components/ui/Dashboard/Nav";
import Sidebar from "@/components/ui/Dashboard/SideBar";
import Dashboard from "@/components/ui/Dashboard/Dashboard";
import UserDashboard from "@/components/ui/Dashboard/UserDashboard";
import OrderManagement from "@/components/ui/Dashboard/OrderManagement";
import { useState } from "react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  // State untuk mengontrol status buka/tutup dokumen di mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-[100dvh] bg-[#0a0a0a] text-white overflow-x-hidden overflow-y-auto scroll-smooth no-scrollbar">
      <StarsWrapper />
      <DashboardNav />
      
      {/* Tombol Burger Menu: Hanya muncul di layar mobile (md:hidden) */}
      {/* Posisinya disesuaikan agar pas di pojok kiri atas/nempel dengan Nav kalian */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-neutral-800 border border-neutral-700 rounded-md md:hidden hover:bg-neutral-700 transition-colors focus:outline-none"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Kirim state dan fungsi handler ke komponen Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Perubahan penting: pl-0 di mobile, md:pl-64 di desktop */}
      <main className="pt-[81px] pl-0 md:pl-64 transition-all duration-300">
        {activeTab === "dashboard" && (
          <div className="p-5">
            <Dashboard />
          </div>
        )}

        {activeTab === "users" && (
          <div className="p-5">
            <UserDashboard />
          </div>
        )}

        {activeTab === "orders" && (
          <div className="p-5">
            <OrderManagement />
          </div>
        )}
      </main>
    </div>
  );
}