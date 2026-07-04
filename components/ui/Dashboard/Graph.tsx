'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";

interface GraphProps {
  data: { name: string; total: number }[];
}

const BAR_THICKNESS = 20;   // tebal bar tetap, tidak berubah berapapun jumlah data
const ROW_HEIGHT = 64;      // total ruang vertikal per item (bar + area teks di bawahnya)
const MAX_CHARS_PER_LINE = 42; // batas karakter sebelum teks pindah baris
const LINE_HEIGHT = 13;     // jarak antar baris teks jika wrap

// Fungsi bantu: pecah teks panjang jadi beberapa baris berdasarkan kata (bukan potong kata)
function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (testLine.length > maxChars && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  if (currentLine) lines.push(currentLine);
  return lines;
}

// Custom label untuk nama kategori, ditaruh DI BAWAH bar (bukan menempel di dalamnya)
// supaya panjang teks tidak pernah bertabrakan dengan bar
const renderNameLabel = (props: any) => {
  const { x, y, height, value } = props;
  const lines = wrapText(value, MAX_CHARS_PER_LINE);
  const startY = y + height + 14; // mulai 14px di bawah ujung bawah bar

  return (
    <text
      x={x}
      y={startY}
      className="text-[11px] italic fill-white/40 font-roboto tracking-wide"
    >
      {lines.map((line, index) => (
        <tspan key={index} x={x} dy={index === 0 ? 0 : LINE_HEIGHT}>
          {line}
        </tspan>
      ))}
    </text>
  );
};

export default function Graph({ data }: GraphProps) {
  const chartHeight = data.length * ROW_HEIGHT;

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 10, right: 40, left: 10, bottom: 10 }}
        barSize={BAR_THICKNESS}
      >
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" hide />

        <Tooltip
          cursor={{ fill: "rgba(255, 255, 255, 0.03)" }}
          contentStyle={{ backgroundColor: "#121212", borderColor: "#262626", color: "#fff" }}
        />

        <Bar dataKey="total" fill="#4f46e5" radius={[0, 4, 4, 0]}>
          {/* Label nama: pakai custom render, bukan LabelList bawaan, biar bisa wrap */}
          <LabelList dataKey="name" content={renderNameLabel} />

          {/* Label angka tetap seperti semula */}
          <LabelList
            dataKey="total"
            position="right"
            dx={10}
            className="text-xs font-bold fill-white font-mono"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}