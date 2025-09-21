// src/components/SakuraFalling.tsx
import React, { useMemo } from "react";
import "./sakura.css";

type Props = { count?: number };

/**
 * SakuraFalling
 * - count: how many petals to generate
 *
 * Make sure you have /public/sakura.png available.
 */
export default function SakuraFalling({ count = 1008 }: Props) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100; // percent
      const duration = 8 + Math.random() * 10; // fall duration (s)
      const delay = -Math.random() * 10; // negative delays let them be pre-scattered
      const sway = 2 + Math.random() * 3; // sway duration (s)
      const size = 6 + Math.random() * 20; // px
      const opacity = 0.6 + Math.random() * 0.4;
      const rotate = Math.floor(Math.random() * 360);
      return { id: i, left, duration, delay, sway, size, opacity, rotate };
    });
  }, [count]);

  return (
    <div className="sakura-wrap" aria-hidden>
      {petals.map((p) => (
        <div
          key={p.id}
          className="sakura-petal"
          style={
            {
              left: `${p.left}%`,
              // CSS variables used inside the css file
              ["--p-duration" as any]: `${p.duration}s`,
              ["--p-delay" as any]: `${p.delay}s`,
              ["--p-sway" as any]: `${p.sway}s`,
              ["--p-size" as any]: `${p.size}px`,
              ["--p-opacity" as any]: `${p.opacity}`,
            } as React.CSSProperties
          }
        >
          <div
            className="sakura-petal-inner"
            style={{ transform: `rotate(${p.rotate}deg)` }}
          />
        </div>
      ))}
    </div>
  );
}
