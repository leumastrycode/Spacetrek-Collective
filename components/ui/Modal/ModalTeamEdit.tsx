import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
  thumbnail: string;
  github: string;
  email: string;
};

type Props = {
  member: TeamMember;
  onClose: () => void;
  onSave: (updated: TeamMember) => void;
};

export default function ModalTeamEdit({ member, onClose, onSave }: Props) {
  const [form, setForm] = useState<TeamMember>(member);
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    let thumbnailUrl = form.thumbnail;

    if (file) {
      const fileExt = file.name.split(".").pop();
      const filePath = `member-${form.id}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("team-thumbnails")
        .upload(filePath, file, { upsert: true });

      if (!uploadError) {
        const { data: publicUrlData } = supabase.storage
          .from("team-thumbnails")
          .getPublicUrl(filePath);
        thumbnailUrl = publicUrlData.publicUrl;
      }
    }
    if (file) {
  const fileExt = file.name.split(".").pop();
  const filePath = `member-${form.id}-${Date.now()}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from("team-thumbnails")
    .upload(filePath, file, { upsert: true });

  if (uploadError) {
    console.error("Upload gagal:", uploadError);
  } else {
    const { data: publicUrlData } = supabase.storage
      .from("team-thumbnails")
      .getPublicUrl(filePath);
    thumbnailUrl = publicUrlData.publicUrl;
  }
}

    const updated = { ...form, thumbnail: thumbnailUrl };

    const { error } = await supabase
      .from("team_members")
      .update({
        name: updated.name,
        role: updated.role,
        description: updated.description,
        thumbnail: updated.thumbnail,
        github: updated.github,
        email: updated.email,
      })
      .eq("id", updated.id);

    setSaving(false);

    if (!error) {
      onSave(updated);
    } else {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Kotak Form */}
      <div className="glass-effect justify-center text-black p-6 rounded-[10px] max-w-[600px] w-full shadow-2xl relative">
        {/* Tombol Close (X) */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-black"
        onClick={onClose}
        >     
          ✕
        </button>

        {/* Form */}
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full mt-[40px] gap-[30px]">
          <div className="relative inline-block w-full max-w-[450px]">
            <h2 className="text-[40px] w-full max-w-[450px] text-start text-indigo-100 font-roboto mb-4">
              <span className="text-indigo-600">Team</span>Edit
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
            name="name"
            placeholder="Team Name"
            value={form.name}
            onChange={handleChange}
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
          />
          <textarea
            name="description"
            placeholder="Team Description"
            value={form.description}
            onChange={handleChange}
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub Repository"
            value={form.github}
            onChange={handleChange}
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
          />

          <input
            type="email"
            name="email"
            placeholder="Team Email"
            value={form.email}
            onChange={handleChange}
            className="text-white text-[20px] border border-indigo-600 p-4 rounded-[3px] bg-transparent w-full max-w-[450px] placeholder:text-gray-400 placeholder:italic placeholder:text-[18px]"
          />

           <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="text-white text-[16px] w-full max-w-[450px]"
          />

          <div className="flex justify-start w-full max-w-[450px]">
            <button
              type="submit"
              disabled={saving}
              className="bg-indigo-600 text-white p-3 rounded mt-[50px] mb-[20px] hover:bg-transparent hover:text-indigo-100 border border-indigo-600 transition-colors duration-300 "
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
