"use client"
import React, { useState } from 'react';

const HoverEffect = () => {
  const [gasParticles, setGasParticles] = useState([]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Add a new gas particle at the cursor location
    setGasParticles((prev) => [
      ...prev,
      { id: Math.random(), x: clientX, y: clientY },
    ]);

    // Remove the gas particle after animation ends
    setTimeout(() => {
      setGasParticles((prev) => prev.slice(1));
    }, 1500); // Match animation duration
  };

  return (
    <div
      className="absolute inset-0"
      onMouseMove={handleMouseMove}
      style={{ pointerEvents: 'none' }}
    >
      {gasParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-50 animate-gasSpread h-24 w-24 blur-3xl"
          style={{
            top: particle.y,
            left: particle.x,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      ))}
    </div>
  );
};

export default HoverEffect;
