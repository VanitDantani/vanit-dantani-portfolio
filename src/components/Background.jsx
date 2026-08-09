import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Background() {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);
  
  // Spring configuration for ultra-smooth buttery movement
  const springConfig = { damping: 40, stiffness: 150, mass: 0.8 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Set initial position to center of screen
    cursorX.set(window.innerWidth / 2);
    cursorY.set(window.innerHeight / 2);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#030305]">
      {/* 1. Deep Space Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030305] to-[#030305]"></div>
      
      {/* 2. Premium Dot Matrix Pattern with fade out mask */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1.5px)',
          backgroundSize: '36px 36px',
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)',
        }}
      ></div>

      {/* 3. Interactive Cursor Spotlight (Hidden on very small screens, smooth spring animation) */}
      <motion.div
        className="hidden md:block absolute top-0 left-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-[100px] mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,112,243,0.25) 0%, rgba(121,40,202,0.1) 40%, transparent 70%)',
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      
      {/* 4. Ambient Static Glows (for atmosphere and mobile fallback) */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[130px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-700/10 blur-[130px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
    </div>
  );
}
