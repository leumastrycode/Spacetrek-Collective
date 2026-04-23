// components/ui/StarsWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const StarsBackground = dynamic(
  () => import("./StarsBackground"),
  { ssr: false }
);

export default function StarsWrapper() {
  return <StarsBackground />;
}