"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function TestPage() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*");

      console.log("Data:", data);
      console.log("Error:", error);
    };

    testConnection();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Testing Supabase</h1>
      <p>Lihat hasilnya di Console Browser (F12).</p>
    </div>
  );
}