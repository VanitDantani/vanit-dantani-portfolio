import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Background() {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  
  // Smooth spring physics for the cursor tracking (the secret to premium feel)
  const springConfig = { damping: 40, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    // Initial position at center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#09090b]">
      
      {/* 1. Base Gradient - Deepest Zinc (Linear App style) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#09090b] via-[#000000] to-[#000000]"></div>

      {/* 2. The Grid - Very subtle, only truly visible where light hits it */}
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at top center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top center, black 0%, transparent 70%)',
        }}
      ></div>

      {/* 3. Elegant Top Ambient Glow (Vercel Style) */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] opacity-[0.15] mix-blend-screen pointer-events-none z-0">
        <div className="absolute inset-0 rounded-full bg-[#0070f3] blur-[100px]"></div>
      </div>

      {/* 4. Interactive Mouse Spotlight (Reveals the grid and adds a soft premium glow) */}
      {isMounted && (
        <motion.div
          className="hidden md:block absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(0, 112, 243, 0.08) 0%, rgba(255,255,255,0) 50%)',
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%"
          }}
        />
      )}

      {/* 5. Premium Noise Texture (The absolute secret to Award Winning Sites) */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-screen z-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      ></div>
      
    </div>
  );
}
