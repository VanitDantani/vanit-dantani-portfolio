import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Motion values for exact mouse position
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth spring physics for the trailing aura effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <>
      {/* Small exact glowing dot on the cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-faang-accent pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 10px 2px var(--color-faang-accent)",
        }}
      />
      
      {/* Large trailing gradient aura */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9998] mix-blend-screen hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(0, 112, 243, 0.15) 0%, rgba(255,255,255,0) 50%)',
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
    </>
  );
}
