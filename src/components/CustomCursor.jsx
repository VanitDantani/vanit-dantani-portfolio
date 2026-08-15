import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Moon } from "lucide-react";

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
      {/* Small exact glowing moon on the cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen hidden md:block w-[14px] h-[14px] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle at 35% 35%, #ffffff 0%, #fdfbd3 40%, #e0ded0 80%, #a3a182 100%)",
          boxShadow: "0 0 15px 4px rgba(255, 255, 255, 0.6), inset -2px -2px 4px rgba(0,0,0,0.3)",
        }}
      />
    </>
  );
}
