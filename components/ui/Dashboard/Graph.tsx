'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";

// Menentukan tipe data props yang wajib dikirim oleh komponen Dashboard
interface GraphProps {
  data: { name: string; total: number }[];
}

export default function Graph({ data }: GraphProps) {
  return (
    <ResponsiveContainer width="100%" height={340}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 10, right: 30, left: 10, bottom: 20 }}
        barCategoryGap={35} // Mengatur jarak antar bar supaya teks di bawahnya tidak tabrakan
      >
        {/* Sumbu X dan Y disembunyikan agar tampilan bersih ala Figma kamu */}
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" hide />
        
        {/* Desain Tooltip saat bar di-hover */}
        <Tooltip
          cursor={{ fill: "rgba(255, 255, 255, 0.03)" }}
          contentStyle={{ backgroundColor: "#121212", borderColor: "#262626", color: "#fff" }}
        />
        
        {/* Batang grafik horizontal */}
        <Bar 
          dataKey="total" 
          fill="#4f46e5" 
          radius={[0, 4, 4, 0]} // Membuat ujung kanan bar melengkung halus
        >
          {/* Label 1: Menampilkan nama opsi di bawah batang grafik */}
          <LabelList
            dataKey="name"
            position="insideBottomLeft"
            dy={22} // Menggeser teks keluar ke bawah batang
            dx={-5} // Penyesuaian margin kiri teks
            className="text-xs italic fill-white/40 font-roboto tracking-wide"
          />
          
          {/* Label 2: Menampilkan angka jumlah di sebelah kanan ujung batang */}
          <LabelList
            dataKey="total"
            position="right"
            dx={10} // Menggeser angka agar tidak menempel di ujung bar
            className="text-xs font-bold fill-white font-mono"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}