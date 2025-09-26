import React, { useEffect, useState } from 'react';
import './Sprinkle.css';

interface Sprinkle {
  id: number;
  left: number;
  top: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

const rainbowColors = [
  'rgba(255, 204, 204, 0.6)', // soft pink
  'rgba(255, 255, 204, 0.6)', // soft yellow
  'rgba(204, 255, 204, 0.6)', // soft green
  'rgba(204, 229, 255, 0.6)', // soft blue
  'rgba(229, 204, 255, 0.6)', // soft purple
  'rgba(255, 229, 204, 0.6)', // peach
];

export default function Sprinkle() {
  const [sprinkles, setSprinkles] = useState<Sprinkle[]>([]);

  useEffect(() => {
    const generated: Sprinkle[] = [];

    for (let i = 0; i < 40; i++) {
      generated.push({
        id: i,
        left: Math.random() * 100, // %
        top: Math.random() * 100, // %
        size: 10 + Math.random() * 20,
        color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)],
        delay: Math.random() * 3, // s
        duration: 2 + Math.random() * 3, // s
      });
    }

    setSprinkles(generated);
  }, []);

  return (
    <div className="sun-sprinkle-container">
      {sprinkles.map(sprinkle => (
        <div
          key={sprinkle.id}
          className="sun-sprinkle"
          style={{
            left: `${sprinkle.left}%`,
            top: `${sprinkle.top}%`,
            width: `${sprinkle.size}px`,
            height: `${sprinkle.size}px`,
            backgroundColor: sprinkle.color,
            animationDelay: `${sprinkle.delay}s`,
            animationDuration: `${sprinkle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
