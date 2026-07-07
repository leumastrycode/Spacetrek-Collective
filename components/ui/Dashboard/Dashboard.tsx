"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import UserLogo from "@/assets-svgr/user-interface.svg";
import OrderLogo from "@/assets-svgr/clipboard.svg";
import { supabase } from "@/lib/supabase";

const Graph = dynamic(() => import("@/components/ui/Dashboard/Graph"), {
  ssr: false,
  loading: () => (
    <div className="text-white/20 font-mono text-xs animate-pulse">
      LOADING_GRAPH_ENGINE...
    </div>
  ),
});

// Mapping tab -> nama kolom di tabel "order"
const tabColumnMap: Record<string, keyof OrderRow> = {
  "01_PURPOSE": "purpose",
  "02_INDUSTRY": "field",
  "03_STYLE": "style",
  "04_COLOR": "color",
  "05_IMPRESSION": "impression",
};

type OrderRow = {
  id: string;
  created_at: string;
  purpose: string | null;
  field: string | null;
  style: string | null;
  color: string | null;
  impression: string | null;
  user_id: string;
  order_status: string; // "in progress" | "done"
};

export default function Dashboard() {
  const router = useRouter();
  const [adminProfile, setAdminProfile] = useState({
    name: "Loading...",
    role: "Loading...",
    email: "Loading...",
    photo: null as string | null,
  });

  const [activeTab, setActiveTab] = useState("01_PURPOSE");

  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  const [totalOrders, setTotalOrders] = useState<number | null>(null);
  const [finishedOrders, setFinishedOrders] = useState<number | null>(null);
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !userId) return;

    if (!file.type.startsWith("image/")) {
      alert("File harus berupa gambar.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("Ukuran gambar maksimal 2MB.");
      return;
    }

    setUploadingPhoto(true);

    const fileExt = file.name.split(".").pop();
    const fileName = `${userId}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("admin-photo")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      alert("Gagal upload foto: " + uploadError.message);
      setUploadingPhoto(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("admin-photo")
      .getPublicUrl(filePath);
    const publicUrl = urlData.publicUrl;

    const { error: updateError } = await supabase
      .from("users")
      .update({ photo: publicUrl })
      .eq("id", userId);

    if (updateError) {
      alert("Gagal update database: " + updateError.message);
      setUploadingPhoto(false);
      return;
    }

    setAdminProfile((prev) => ({ ...prev, photo: publicUrl }));
    setUploadingPhoto(false);
  };

  // Ambil semua data sekali di awal (bukan tiap ganti tab, biar hemat request)
  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);

      const { data: authData, error: authError } =
        await supabase.auth.getUser();

      if (authError || !authData?.user) {
        console.error("Gagal ambil data user:", authError?.message);
        router.push("/");
        return;
      }

      setUserId(authData.user.id);

      const { data: profileData } = await supabase
        .from("users")
        .select("full_name, role, email, photo")
        .eq("id", authData.user.id)
        .single();

      if (!profileData || profileData.role !== "admin") {
        alert("Akses ditolak. Anda bukan admin.");
        router.push("/");
        return;
      }

      setAdminProfile({
        name: profileData.full_name,
        role: profileData.role,
        email: profileData.email,
        photo: profileData.photo,
      });

      // Total Users
      const { count: usersCount, error: usersError } = await supabase
        .from("users")
        .select("*", { count: "exact", head: true });

      if (usersError)
        console.error("Gagal ambil total users:", usersError.message);

      // Semua order (dipakai untuk total, finished, dan analytics)
      const { data: ordersData, error: ordersError } = await supabase
        .from("order")
        .select(
          "id, created_at, purpose, field, style, color, impression, user_id, order_status",
        );

      if (ordersError) {
        console.error("Gagal ambil data order:", ordersError.message);
      } else if (ordersData) {
        setOrders(ordersData as OrderRow[]);
        setTotalOrders(ordersData.length);

        const finishedCount = ordersData.filter(
          (order) => order.order_status?.toLowerCase().trim() === "done",
        ).length;
        setFinishedOrders(finishedCount);
      }

      setTotalUsers(usersCount ?? 0);
      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  const PRESET_OPTIONS: Record<string, string[]> = {
    purpose: [
      "Companies / Startups",
      "Personal Branding",
      "Communities / Organizations / Esports Teams",
      "Specific Projects / Products",
    ],
    field: [
      "Technology / IT / Software Development",
      "Crypto / Web3 / FinTech",
      "Gaming / Digital Entertainment",
      "Fashion / Modern Lifestyle",
      "Food & Beverage / Culinary",
    ],
    style: [
      "Minimalist",
      "Cyberpunk",
      "Sci-Fi & Space",
      "Synthwave / Retro-Futurism",
    ],
    color: ["Dark Tech / Monochrome", "Neon Vibes", "Deep Space", "Eco-Tech"],
    impression: [
      "Innovative and Visionary",
      "Fast, Dynamic, and Aggressive",
      "Mysterious, Premium, and Luxurious",
      "Friendly, Open, and Accessible",
    ],
  };

  // Hitung chart data untuk tab aktif dari data order yang sudah di-fetch
  const currentChartData = useMemo(() => {
    const column = tabColumnMap[activeTab]; // "purpose" | "field" | "style" | "color" | "impression"
    const presetList = PRESET_OPTIONS[column] || [];
    const counts: Record<string, number> = {};

    orders.forEach((order) => {
      const rawValue = order[column];
      const trimmed = rawValue?.trim();

      // Kosong ATAU tidak ada di daftar preset resmi -> masuk kategori "Custom"
      const isPreset = trimmed && presetList.includes(trimmed);
      const category = isPreset ? trimmed : "Custom";

      counts[category] = (counts[category] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);
  }, [orders, activeTab]);

  // Hitung quick insights dari currentChartData
  const insights = useMemo(() => {
    const sumTotal = currentChartData.reduce(
      (sum, item) => sum + item.total,
      0,
    );
    const topChoice = currentChartData[0];
    const topChoicePercentage =
      topChoice && sumTotal > 0
        ? Math.round((topChoice.total / sumTotal) * 100)
        : 0;
    const customRequests =
      currentChartData.find((item) => item.name === "Custom")?.total ?? 0;

    return {
      topChoiceName: topChoice?.name ?? "-",
      topChoicePercentage,
      customRequests,
    };
  }, [currentChartData]);

  return (
    <div className="flex flex-col w-full items-start justify-center">
      {/* Admin Profile */}
      <div className="glass-effect-no-hover w-full p-8 rounded-lg mb-5">
        <div className="flex flex-row gap-5">
          <div
            className="w-[120px] h-[120px] rounded-full bg-gray-500 mr-4 relative group cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <Image
              src={adminProfile.photo || "/default-avatar.png"}
              alt="Admin Profile"
              width={120}
              height={120}
              className="rounded-full object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-xs text-white">
              {uploadingPhoto ? "Uploading..." : "Ganti"}
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handlePhotoChange}
              className="hidden"
            />
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Hi, {adminProfile.name}</h2>
              <p className="text-gray-400">Administrator</p>
            </div>
            <p className="text-gray-400">{adminProfile.email}</p>
          </div>
        </div>
      </div>

      {/* Dashboard Grid Content */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 font-roboto">
        {/* User Count */}
        <div className="glass-effect-no-hover w-full flex flex-row justify-center items-center p-8 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-Regular text-white/40">Total Users</h3>
            <p className="text-3xl font-bold">
              {loading ? "..." : totalUsers?.toLocaleString("id-ID")}
            </p>
          </div>
          <UserLogo className="ml-auto w-[75px] h-[75px]" />
        </div>

        {/* Order Count */}
        <div className="glass-effect-no-hover w-full flex flex-row justify-center items-center p-8 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-Regular text-white/40">Total Orders</h3>
            <p className="text-3xl font-bold">
              {loading ? "..." : totalOrders?.toLocaleString("id-ID")}
            </p>
          </div>
          <OrderLogo className="ml-auto w-[75px] h-[75px]" />
        </div>

        {/* Finished Orders */}
        <div className="glass-effect-no-hover w-full flex flex-row justify-center items-center p-8 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-Regular text-white/40">
              Finished Orders
            </h3>
            <p className="text-3xl font-bold">
              {loading ? "..." : finishedOrders?.toLocaleString("id-ID")}
            </p>
          </div>
          <OrderLogo className="ml-auto w-[75px] h-[75px]" />
        </div>
      </div>

      {/* Graph */}
      <div className="glass-effect-no-hover w-full p-8 rounded-lg flex flex-col gap-6">
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

        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="w-full lg:w-[70%] h-[380px] items-center justify-center relative block overflow-y-auto">
            <Graph key={activeTab} data={currentChartData} />
          </div>

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
                <p>
                  &gt; TOP_CHOICE: {insights.topChoiceName} (
                  {insights.topChoicePercentage}%)
                </p>
                <p>&gt; CUSTOM_REQUESTS: {insights.customRequests} Orders</p>
                <p>&gt; SYSTEM_STATUS: OPERATIONAL</p>
              </div>
            </div>

            <div className="text-[10px] text-white/30 border-t border-white/5 pt-3">
              Data synchronized successfully with Supabase Cloud Core.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
