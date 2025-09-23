// src/components/SnowBackground.tsx
import React, { useMemo } from "react";
import "./snow.css"; // make sure this file exists

type Props = { count?: number };

export default function SnowBackground({ count = 50 }: Props) {
  const snowflakes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 25,
      delay: -Math.random() * 5,
      sway: 2 + Math.random() * 2,
      size: 5 + Math.random() * 10,
      opacity: 0.5 + Math.random() * 0.5,
      rotate: Math.random() * 360,
    }));
  }, [count]);

  return (
   <div
      className="snow-wrap"
      aria-hidden
      style={{
        position: 'absolute', // important: fill parent container
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // don't block clicks
        zIndex: 0, // ensure content is on top
      }}
    >
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            top: "0%",
            "--p-duration": `${flake.duration}s`,
            "--p-delay": `${flake.delay}s`,
            "--p-sway": `${flake.sway}s`,
            "--p-size": `${flake.size}px`,
            "--p-opacity": `${flake.opacity}`,
          } as React.CSSProperties}
        >
          <div
            className="snowflake-inner"
            style={{ transform: `rotate(${flake.rotate}deg)` }}
          />
        </div>
      ))}
    </div>
  );
}
