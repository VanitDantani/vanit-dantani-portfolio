import { useEffect, useState } from "react";

export default function Background() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate 150 random stars for a dense space effect
    const newStars = Array.from({ length: 150 }).map(() => ({
      id: Math.random().toString(36).substring(7),
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1 + "px", // Varying small sizes
      animationDelay: Math.random() * 5 + "s",
      animationDuration: Math.random() * 4 + 3 + "s", // Random twinkle speeds
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#000000]">
      
      {/* 1. Pure Pitch Black Background */}
      <div className="absolute inset-0 bg-[#000000]"></div>

      {/* 2. Pure React Twinkling Stars (No external libraries, 100% reliable) */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration,
              boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.4)" // Soft glow around stars
            }}
          />
        ))}
      </div>

      {/* 3. Soft overlay gradient so text remains ultra-clear at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#000000] to-transparent z-20 pointer-events-none"></div>
    </div>
  );
}
