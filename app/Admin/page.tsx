'use client';

import StarsWrapper from "@/components/ui/StarsWrapper";
import DashboardNav from "@/components/ui/Dashboard/Nav";
import Sidebar from "@/components/ui/Dashboard/SideBar";
import Dashboard from "@/components/ui/Dashboard/Dashboard";
import UserDashboard from "@/components/ui/Dashboard/UserDashboard";
import { useState } from "react";

export default function AdminPage() {

  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="relative min-h-[100dvh] bg-[#0a0a0a] text-white overflow-x-hidden overflow-y-auto scroll-smooth no-scrollbar">
      <StarsWrapper />
      <DashboardNav />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="pt-[81px] pl-64">
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
      </main>
    </div>
  );
}
