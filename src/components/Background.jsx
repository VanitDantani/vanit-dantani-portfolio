import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Sparkling Fire Shooting Star Component
const FireMeteors = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    let timeoutId;

    const spawnMeteor = () => {
      const newMeteor = {
        id: Math.random().toString(36).substring(7),
        left: Math.random() * 100 + "%", // Random starting X position (0 to 100% width)
        angle: Math.random() * 20 + 80,  // Angle: 80 to 100 degrees (falling mostly straight down)
        duration: Math.random() * 2 + 3, // Duration: 3 to 5 seconds to cross the screen
      };

      setMeteors((prev) => [...prev, newMeteor]);

      // Remove the meteor from state after its animation completes so we don't leak memory
      setTimeout(() => {
        setMeteors((prev) => prev.filter((m) => m.id !== newMeteor.id));
      }, newMeteor.duration * 1000 + 500);

      // Schedule the next meteor in 3 to 4 seconds
      const nextDelay = Math.random() * 1000 + 3000;
      timeoutId = setTimeout(spawnMeteor, nextDelay);
    };

    // Start spawning
    spawnMeteor();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
      {meteors.map((meteor) => (
        <motion.span
          key={meteor.id}
          className="absolute h-[3px] w-[3px] rounded-full bg-yellow-300 shadow-[0_0_15px_4px_#ff9800]"
          style={{
            top: "-10%", // Always start above the screen
            left: meteor.left, // Random horizontal position
            rotate: meteor.angle, // Rotate so it points downwards
          }}
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            // Animating 'x' moves it forward along its rotation angle (which is pointing down)
            x: 2000, 
          }}
          transition={{
            duration: meteor.duration,
            ease: "linear",
          }}
        >
          {/* Sparkling Fire Tail (Trails behind the head) */}
          <div 
            className="pointer-events-none absolute top-1/2 -z-10 h-[2px] w-[200px] -translate-y-1/2 bg-gradient-to-r from-transparent via-red-500 to-orange-400 blur-[1px]" 
            style={{ right: "100%" }} 
          />
        </motion.span>
      ))}
    </div>
  );
};

export default function Background() {
  const [starLayers, setStarLayers] = useState({ layer1: [], layer2: [], layer3: [] });
  const { scrollY } = useScroll();
  
  // Parallax transforms: As user scrolls down, stars move DOWN.
  const y1 = useTransform(scrollY, [0, 5000], [0, 400]);  // Back layer (moves slow)
  const y2 = useTransform(scrollY, [0, 5000], [0, 800]);  // Middle layer (moves medium)
  const y3 = useTransform(scrollY, [0, 5000], [0, 1500]); // Front layer (moves fast)

  useEffect(() => {
    const generateStars = (count, sizeRange) => {
      return Array.from({ length: count }).map(() => ({
        id: Math.random().toString(36).substring(7),
        top: Math.random() * 250 - 50 + "%", 
        left: Math.random() * 100 + "%",
        size: Math.random() * sizeRange[0] + sizeRange[1] + "px",
        animationDelay: Math.random() * 5 + "s",
        animationDuration: Math.random() * 4 + 3 + "s",
      }));
    };

    setStarLayers({
      layer1: generateStars(100, [0.5, 0.5]), // Tiny distant stars
      layer2: generateStars(60, [1, 1.5]),    // Medium stars
      layer3: generateStars(40, [1.5, 2.5])   // Large close stars
    });
  }, []);

  const renderLayer = (stars) => (
    <>
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
            boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.4)"
          }}
        />
      ))}
    </>
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#000000]">
      
      {/* 1. Pure Pitch Black Background */}
      <div className="absolute inset-0 bg-[#000000]"></div>

      {/* 2. Parallax Star Layers (Moving DOWN on scroll) */}
      <motion.div className="absolute inset-0" style={{ y: y1 }}>{renderLayer(starLayers.layer1)}</motion.div>
      <motion.div className="absolute inset-0" style={{ y: y2 }}>{renderLayer(starLayers.layer2)}</motion.div>
      <motion.div className="absolute inset-0" style={{ y: y3 }}>{renderLayer(starLayers.layer3)}</motion.div>

      {/* 3. Sparkling Fire Shooting Stars (New random location every time) */}
      <FireMeteors />

      {/* 4. Soft overlay gradient so text remains ultra-clear at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#000000] to-transparent z-20 pointer-events-none"></div>
    </div>
  );
}
