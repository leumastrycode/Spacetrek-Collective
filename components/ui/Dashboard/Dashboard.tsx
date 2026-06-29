"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Image from "next/image";
import UserLogo from "@/assets-svgr/user-interface.svg";
import OrderLogo from "@/assets-svgr/clipboard.svg";

// 2. Import komponen Graph secara dinamis dengan mematikan SSR (Server-Side Rendering)
const Graph = dynamic(() => import("@/components/ui/Dashboard/Graph"), {
  ssr: false,
  loading: () => (
    <div className="text-white/20 font-mono text-xs animate-pulse">
      LOADING_GRAPH_ENGINE...
    </div>
  ),
});

const chartDataSources: Record<string, { name: string; total: number }[]> = {
  "01_PURPOSE": [
    { name: "Products", total: 40 },
    { name: "Organization", total: 90 },
    { name: "Personal Branding", total: 65 },
    { name: "Companies/Startups", total: 85 },
    { name: "Custom", total: 20 },
  ],
  "02_INDUSTRY": [
    { name: "Tech & Web3", total: 70 },
    { name: "F&B", total: 45 },
    { name: "Creative Agency", total: 30 },
    { name: "Custom", total: 15 },
  ],
  "03_STYLE": [
    { name: "Minimalist", total: 50 },
    { name: "Modern", total: 80 },
    { name: "Classic", total: 40 },
    { name: "Custom", total: 25 },
  ],
  "04_COLOR": [
    { name: "Blue", total: 60 },
    { name: "Green", total: 40 },
    { name: "Red", total: 30 },
    { name: "Custom", total: 20 },
  ],
  "05_IMPRESSION": [
    { name: "Professional", total: 70 },
    { name: "Friendly", total: 50 },
    { name: "Creative", total: 30 },
    { name: "Custom", total: 20 },
  ],
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("01_PURPOSE");
  const currentChartData =
    chartDataSources[activeTab] || chartDataSources["01_PURPOSE"];

  return (
    <div className="flex flex-col w-full items-start justify-center">
      {/* Admin Profile */}
      <div className="glass-effect-no-hover w-full p-8 rounded-lg mb-5">
        <div className="flex flex-row gap-5">
          {/* Admin photo Profile */}
          <div className="w-[120px] h-[120px] rounded-full bg-gray-500 mr-4">
            <Image
              src="/path/to/admin-photo.jpg"
              alt="Admin Profile"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Admin Name</h2>
            <p className="text-gray-400">Position</p>
          </div>
        </div>
      </div>

      {/* Dashboard Grid Content */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 font-roboto">
        {/* User Count */}
        <div className="glass-effect-no-hover w-full flex flex-row justify-center items-center p-8 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-Regular text-white/40">Total Users</h3>
            <p className="text-3xl font-bold">1,234</p>
          </div>
          <UserLogo className="ml-auto w-[75px] h-[75px]" />
        </div>

        {/* Order Count */}
        <div className="glass-effect-no-hover w-full flex flex-row justify-center items-center p-8 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-Regular text-white/40">Total Orders</h3>
            <p className="text-3xl font-bold">567</p>
          </div>
          <OrderLogo className="ml-auto w-[75px] h-[75px]" />
        </div>

        {/* Finished Orders */}
        <div className="glass-effect-no-hover w-full flex flex-row justify-center items-center p-8 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-Regular text-white/40">
              Finished Orders
            </h3>
            <p className="text-3xl font-bold">456</p>
          </div>
          <OrderLogo className="ml-auto w-[75px] h-[75px]" />
        </div>
      </div>

      {/* Graph */}
      <div className="glass-effect-no-hover w-full p-8 rounded-lg flex flex-col gap-6">
        {/* Header & Navigasi Tab */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-sm font-mono tracking-widest text-white/70">
              PROJECT_BRIEF_ANALYTICS
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] font-mono">
            {[
              "01_PURPOSE",
              "02_INDUSTRY",
              "03_STYLE",
              "04_COLOR",
              "05_IMPRESSION",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded border transition-all ${
                  activeTab === tab
                    ? "bg-indigo-600 border-indigo-500"
                    : "border-white/10"
                }`}
              >
                [{tab}]
              </button>
            ))}
          </div>
        </div>

        {/* Konten Utama */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Kolom Grafik (70%) */}
          <div className="w-full lg:w-[70%] h-[380px] items-center justify-center relative block">           
            <Graph key={activeTab} data={currentChartData} />
          </div>

          {/* Kolom Kanan: Quick Insights Panel (30%) */}
          <div className="w-full lg:w-[30%] border border-white/5 rounded-lg p-5 bg-neutral-950/30 font-mono text-xs text-white/60 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h4 className="text-white/80 font-bold tracking-wider uppercase border-b border-white/5 pb-2">
                QUICK_INSIGHTS
              </h4>
              <div className="space-y-2">
                <p className="text-white/40 font-sans italic">
                  Current Phase Active:
                </p>
                <p className="text-indigo-400 font-semibold">{activeTab}</p>
              </div>
              <div className="space-y-1">
                <p className="">&gt; TOP_CHOICE: Organization (37%)</p>
                <p className="">&gt; CUSTOM_REQUESTS: 20 Orders</p>
                <p className="">&gt; SYSTEM_STATUS: OPERATIONAL</p>
              </div>
            </div>

            <div className="text-[10px] text-white/30 border-t border-white/5 pt-3">
              Data synchronized successfully with Supabase Cloud Core.
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold">test</h1>
    </div>
  );
}
