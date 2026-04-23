"use client";
import { useEffect, useState } from "react";
import "../../app/globals.css";
import { useRef } from "react";

type Star = {
  top: number;
  left: number;
  size: number;
  opacity: number;
};

function generateStars(count: number, scale = 1): Star[] {
  return Array.from({ length: count }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: (Math.random() * 1.5 + 0.3) * scale,
    opacity: Math.random() * 0.4 + 0.1,
  }));
}

export default function StarsBackground() {
  const farStars = useRef<Star[]>(generateStars(120, 1));
  const nearStars = useRef<Star[]>(generateStars(40, 1.8));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Layer 1 (far - naik) */}
      <div className="absolute inset-0 layer-up">
        {/* eslint-disable-next-line react-hooks/refs */}
        {farStars.current.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Layer 2 (near - turun) */}
      <div className="absolute inset-0 layer-down">
        {/* eslint-disable-next-line react-hooks/refs */}
        {nearStars.current.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

    </div>
  );
}
