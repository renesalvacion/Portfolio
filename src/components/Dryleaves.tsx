// components/DryLeaves.tsx
import React, { useEffect, useRef } from "react";
import "./sparkles.css";

export default function DryLeaves() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 20; i++) {
      const leaf = document.createElement("img");
      leaf.className = "leaf";
      leaf.src = "/dry-leaves.png"; // since it's in /public
      leaf.style.position = "absolute";
      leaf.style.left = Math.random() * 100 + "%";
      leaf.style.top = "-50px"; // start above container
      leaf.style.width = Math.random() * 20 + 10 + "px"; // 10–30px
      leaf.style.opacity = String(0.5 + Math.random() * 0.5);
      leaf.style.animationDuration = 10 + Math.random() * 10 + "s"; 
// 10–20 seconds (much slower)


      container.appendChild(leaf);
    }
  }, []);

  return (
    <div
  ref={containerRef}
  className="absolute inset-0 pointer-events-none overflow-hidden z-0"
/>

  );
}
