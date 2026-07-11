"use client";
import LineAsset from "@/assets-svgr/team-tittle-asset.svg";
import Orbit3 from "@/assets-svgr/orbit-3.svg";
import Orbit4 from "@/assets-svgr/orbit-4.svg";
import IndigoStar from "@/assets-svgr/indigo-blur-star2.svg";
import GithubIcon from "@/assets-svgr/github-w.svg";
import MailIcon from "@/assets-svgr/mail1.svg";
import EditIcon from "@/assets-svgr/edit.svg";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import ModalTeamEdit from "@/components/ui/Modal/ModalTeamEdit";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const TEAM_DATA = [
  {
    id: 1,
    name: "Samuel Andhika P",
    role: "UI/UX & Frontend Dev",
    description:
      "Bertanggung jawab atas perancangan antarmuka pengguna (high-fidelity design) dan implementasi komponen visual menggunakan framework modern untuk memastikan pengalaman pengguna yang optimal.",
    thumbnail: "/assets/team-photo/team-samuel.jpeg",
    github: "https://github.com/samuelandhika",
    email: "samuel.andhika@example.com",
  },
  {
    id: 2,
    name: "Ahmad Taufik Sahrul Hidayat",
    role: "Frontend & Integration Dev",
    description:
      "Fokus pada pengembangan logika sisi klien dan integrasi API melalui data fetching, memastikan sinkronisasi data antara antarmuka pengguna dengan layanan backend berjalan secara efisien.",
    thumbnail: "/assets/team-photo/Sahrul2.jpeg",
    github: "https://github.com/ahmadtaufik",
    email: "ahmad.taufik@example.com",
  },
  {
    id: 3,
    name: "Daffa Mashabi",
    role: "Backend & AI Engineer",
    description:
      "Mengembangkan arsitektur server-side dan mengintegrasikan modul kecerdasan buatan (AI) untuk pemrosesan data tingkat lanjut serta otomatisasi fungsi sistem di dalam aplikasi.",
    thumbnail: "/assets/team-photo/team-daffa.jpeg",
    github: "https://github.com/daffamashabi",
    email: "daffa.mashabi@example.com",
  },
  {
    id: 4,
    name: "Sukma Putri Ramadani",
    role: "Database & Data Architect",
    description:
      "Mengelola skema basis data dan optimasi query untuk distribusi data, memastikan integritas serta ketersediaan data saat dilakukan pemanggilan oleh layanan frontend maupun backend.",
    thumbnail: "/assets/team-photo/team-sukma.jpeg",
    github: "https://github.com/sukmaputri",
    email: "sukma.putri@example.com",
  },
];

export default function Team() {
  const [teamData, setTeamData] = useState(TEAM_DATA); // fallback awal
  const [activeMember, setActiveMember] = useState(TEAM_DATA[0]);
  const [role, setRole] = useState<"user" | "admin" | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleSaveTeam = (updated: (typeof TEAM_DATA)[number]) => {
    setTeamData((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));
    setActiveMember(updated);
    setIsEditOpen(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const { data: authData } = await supabase.auth.getUser();

      if (!authData?.user) {
        setRole(null);
        return;
      }

      const { data: profileData, error } = await supabase
        .from("users")
        .select("role")
        .eq("id", authData.user.id)
        .single();

      if (error || !profileData) {
        setRole(null);
        return;
      }

      setRole(profileData.role ?? "user");
    };

    const fetchTeam = async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .order("id");

      if (!error && data) {
        setTeamData(data);
        setActiveMember(data[0]);
      }
    };

    checkLogin();
    fetchTeam();

    window.addEventListener("authChange", checkLogin);

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      checkLogin();
    });

    return () => {
      window.removeEventListener("authChange", checkLogin);
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <section
      id="team"
      className="scroll-mt-[100px] py-10 min-h-[100dvh] min-[900px]:h-screen w-full snap-start flex items-center justify-center"
    >
      <FadeIn direction="right" delay={0.4}>
        <div className="flex w-full justify-center items-center px-4 min-[900px]:px-[70px]">
          {/* Card */}
          <div className="relative flex flex-col pt-[75px] glass-box overflow-hidden w-full max-w-[1220px] min-h-[600px] sm:min-h-[600px]">
            {role === "admin" && (
              <EditIcon
                onClick={() => setIsEditOpen(true)}
                className="absolute top-4 right-4 w-[20px] h-[20px] text-gray-400 hover:text-indigo-500 cursor-pointer transition-colors"
              />
            )}
            {/* Bagian Atas */}
            <div className="flex flex-col gap-2 w-full px-6 min-[900px]:px-[90px] mb-2">
              {/* Deskripsi */}
              <div className="flex flex-col gap-8 w-full min-[900px]:max-w-[610px]">
                <div className="relative">
                  <h2 className="font-roboto text-gray-400 text-5xl font-normal leading-tight">
                    OUR <span className="text-indigo-600">TEAM</span>
                  </h2>
                  <p className="text-gray-400 text-xl font-roboto tracking-wide uppercase">
                    {activeMember.role}
                  </p>
                  <LineAsset className="absolute -left-[50px] -bottom-[20px]" />
                </div>

                <div className="min-h-[150px]">
                  <h3 className="text-white text-2xl font-roboto font-medium mb-2">
                    {activeMember.name}
                  </h3>
                  <p className="text-gray-400 text-xl sm:text-xl min-[900px]:text-1xl font-inter leading-relaxed tracking-wide">
                    {activeMember.description}
                  </p>
                </div>
              </div>

              {/* Contact Link */}
              <div className="flex flex-row gap-[30px] justify-start items-center flex-1 min-[900px]:pt-[1px]">
                <a
                  href={activeMember.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <GithubIcon className="w-8 h-8 text-gray-400 hover:text-indigo-500 transition-colors" />
                </a>
                <a href={`mailto:${activeMember.email}`} className="mt-4">
                  <MailIcon className="w-8 h-8 text-gray-400 hover:text-indigo-500 transition-colors" />
                </a>
              </div>
            </div>

            {/* Selector */}
            <div className="mt-auto relative w-full black-glass-effect py-8 px-6 min-[900px]:px-[120px]">
              {/* Asset Orbit */}
              <Orbit4 className="absolute left-0 top-0 pointer-events-none" />

              {/* Container Thumbnail */}
              <div className="flex flex-wrap gap-6 min-[900px]:gap-12 relative z-10">
                {teamData.map((member) => (
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
                    <div className="relative w-16 h-16 min-[900px]:w-20 min-[900px]:h-20 overflow-hidden rounded-xl">
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
      {isEditOpen && (
        <ModalTeamEdit
          member={activeMember}
          onClose={() => setIsEditOpen(false)}
          onSave={handleSaveTeam}
        />
      )}
    </section>
  );
}
