"use client";
import LineAsset from "@/assets-svgr/team-tittle-asset.svg";
import Orbit3 from "@/assets-svgr/orbit-3.svg";
import Orbit4 from "@/assets-svgr/orbit-4.svg";
import IndigoStar from "@/assets-svgr/indigo-blur-star2.svg";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import { useState } from "react";

const TEAM_DATA = [
  {
    id: 1,
    name: "Samuel Andhika P",
    role: "UI/UX & Frontend Dev",
    description:
      "Bertanggung jawab atas perancangan antarmuka pengguna (high-fidelity design) dan implementasi komponen visual menggunakan framework modern untuk memastikan pengalaman pengguna yang optimal.",
    image: "/assets/team-photo/team-samuel2.jpeg",
    thumbnail: "/assets/team-photo/team-samuel.jpeg",
  },
  {
    id: 2,
    name: "Ahmad Taufik Sahrul Hidayat",
    role: "Frontend & Integration Dev",
    description:
      "Fokus pada pengembangan logika sisi klien dan integrasi API melalui data fetching, memastikan sinkronisasi data antara antarmuka pengguna dengan layanan backend berjalan secara efisien.",
    image: "/assets/team-photo/Sahrul.jpeg",
    thumbnail: "/assets/team-photo/Sahrul2.jpeg",
  },
  {
    id: 3,
    name: "Daffa Mashabi",
    role: "Backend & AI Engineer",
    description:
      "Mengembangkan arsitektur server-side dan mengintegrasikan modul kecerdasan buatan (AI) untuk pemrosesan data tingkat lanjut serta otomatisasi fungsi sistem di dalam aplikasi.",
    image: "/assets/team-photo/team-daffa.jpeg",
    thumbnail: "/assets/team-photo/team-daffa.jpeg",
  },
  {
    id: 4,
    name: "Sukma Putri Ramadani",
    role: "Database & Data Architect",
    description:
      "Mengelola skema basis data dan optimasi query untuk distribusi data, memastikan integritas serta ketersediaan data saat dilakukan pemanggilan oleh layanan frontend maupun backend.",
    image: "/assets/team-photo/team-sukma.jpeg",
    thumbnail: "/assets/team-photo/team-sukma.jpeg",
  },
];

export default function Team() {
  const [activeMember, setActiveMember] = useState(TEAM_DATA[0]);

  return (
    <section id="team" className="scroll-mt-[100px] py-10 min-h-[100dvh] md:h-screen overflow-hidden w-full snap-start flex items-center justify-center">
      <FadeIn direction="right" delay={0.4}>
        <div className="flex w-full justify-center items-center px-4 md:px-[70px]">
          <div className="relative flex flex-col pt-[75px] glass-box overflow-hidden w-full max-w-[1220px] min-h-[800px]">
            {/* Bagian Atas */}
            <div className="flex flex-col min-[900px]:flex-row gap-10 w-full px-6 min-[900px]:px-[90px] mb-12">
              {/* Deskripsi */}
              <div className="flex flex-col gap-8 w-full md:max-w-[610px]">
                <div className="relative">
                  <h2 className="font-roboto text-gray-400 text-5xl font-normal leading-tight">
                    OUR <span className="text-indigo-600">TEAM</span>
                  </h2>
                  <p className="text-gray-400 text-xl font-roboto tracking-wide uppercase">
                    {activeMember.role}
                  </p>
                  <LineAsset className="absolute -left-[50px] -bottom-[20px] hidden md:block" />
                </div>

                <div className="min-h-[150px]">
                  <h3 className="text-white text-2xl font-roboto font-medium mb-2">
                    {activeMember.name}
                  </h3>
                  <p className="text-gray-400 text-xl md:text-2xl font-inter leading-relaxed tracking-wide">
                    {activeMember.description}
                  </p>
                </div>
              </div>

              {/* Foto Profil Besar */}
              <div className="flex flex-col justify-center items-center flex-1 md:pt-[60px]">
                <div className="relative w-[280px] h-[350px] md:w-[300px] md:h-[400px]">
                  <Image
                    src={activeMember.image}
                    alt={activeMember.name}
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Selector */}
            <div className="mt-auto relative w-full black-glass-effect py-8 px-6 md:px-[120px]">
              {/* Asset Orbit */}
              <Orbit4 className="absolute left-0 top-0 pointer-events-none" />

              {/* Container Thumbnail */}
              <div className="flex flex-wrap gap-6 md:gap-12 relative z-10">
                {TEAM_DATA.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setActiveMember(member)}
                    className={`cursor-pointer transition-all duration-300 transform hover:scale-110 
        ${
          activeMember.id === member.id
            ? "ring-4 ring-indigo-500 rounded-xl scale-110"
            : "opacity-60 hover:opacity-100"
        }`}
                  >
                    <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-xl">
                      <Image
                        alt={member.name}
                        src={member.thumbnail} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Orbit3 className="absolute -left-[2px] -bottom-[-20px] pointer-events-none" />
            <IndigoStar className="absolute -right-[870px] -top-[40px] -z-10 opacity-50" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
