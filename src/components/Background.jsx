import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Lightweight magical dust component using Framer Motion
const MagicDust = ({ number = 20 }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: number }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#a7f3d0] mix-blend-screen"
          style={{
            width: Math.random() * 3 + 2 + "px",
            height: Math.random() * 3 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            filter: "blur(1px)",
            boxShadow: "0 0 8px 2px rgba(16, 185, 129, 0.8)",
          }}
          animate={{
            y: [0, Math.random() * -150 - 50],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#010604]">
      
      {/* 1. Real Forest Drone Shot - Tiny Blur */}
      <div 
        className="absolute inset-[-5%] bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          // Drone/Aerial shot of dense dark green forest canopy
          backgroundImage: 'url("https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2500&auto=format&fit=crop")',
          filter: 'blur(3px)', // Tiny blur as requested
          transform: 'scale(1.05)' // Prevent blurred edges from showing white
        }}
      ></div>

      {/* 2. Dark Overlay to ensure text readability (crucial since the image is clear) */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* 3. Magical Floating Dust / Wand Vibe */}
      <MagicDust number={30} />

      {/* 4. Soft Emerald Ambient Light (Top Corner) */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vh] opacity-30 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.35) 0%, transparent 70%)',
        }}
      ></div>

      {/* 5. Deep shadow at bottom to ground the layout */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#000000] to-transparent"></div>
    </div>
  );
}
