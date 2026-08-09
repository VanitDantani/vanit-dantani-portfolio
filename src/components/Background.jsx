import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Background() {
  const [starLayers, setStarLayers] = useState({ layer1: [], layer2: [], layer3: [] });
  const { scrollY } = useScroll();
  
  // Parallax transforms: As user scrolls down, scrollY increases. 
  // We map scrollY to positive 'y' values so the stars literally move DOWN the screen.
  const y1 = useTransform(scrollY, [0, 5000], [0, 400]);  // Back layer (moves slow)
  const y2 = useTransform(scrollY, [0, 5000], [0, 800]);  // Middle layer (moves medium)
  const y3 = useTransform(scrollY, [0, 5000], [0, 1500]); // Front layer (moves fast)

  useEffect(() => {
    // Helper function to generate stars
    const generateStars = (count, sizeRange) => {
      return Array.from({ length: count }).map(() => ({
        id: Math.random().toString(36).substring(7),
        // Spread stars vertically from -50% to 200% so we don't run out of stars when they move down
        top: Math.random() * 250 - 50 + "%", 
        left: Math.random() * 100 + "%",
        size: Math.random() * sizeRange[0] + sizeRange[1] + "px",
        animationDelay: Math.random() * 60 + "s",
        animationDuration: Math.random() * 60 + 60 + "s", // 60 to 120 seconds per cycle
      }));
    };

    // Generate 3 distinct layers of stars for a realistic 3D depth effect
    setStarLayers({
      layer1: generateStars(200, [0.5, 0.5]), // Tiny distant stars
      layer2: generateStars(120, [1, 1.5]),    // Medium stars
      layer3: generateStars(80, [1.5, 2.5])   // Large close stars
    });
  }, []);

  // Reusable component to render a layer
  const renderLayer = (stars) => (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          onAnimationIteration={(e) => {
            // Instantly move the star to a new position while it is at opacity 0 (end of animation cycle)
            e.target.style.top = Math.random() * 250 - 50 + "%";
            e.target.style.left = Math.random() * 100 + "%";
          }}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
            boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.4)" // Soft glow
          }}
        />
      ))}
    </>
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-faang-bg transition-colors duration-500">
      
      {/* 1. Base Background */}
      <div className="absolute inset-0 bg-faang-bg transition-colors duration-500"></div>

      {/* 2. Parallax Star Layers (Moving DOWN on scroll) */}
      
      {/* Back Layer (Slowest) */}
      <motion.div className="absolute inset-0 star-layer transition-opacity duration-500" style={{ y: y1 }}>
        {renderLayer(starLayers.layer1)}
      </motion.div>

      {/* Middle Layer */}
      <motion.div className="absolute inset-0 star-layer transition-opacity duration-500" style={{ y: y2 }}>
        {renderLayer(starLayers.layer2)}
      </motion.div>

      {/* Front Layer (Fastest) */}
      <motion.div className="absolute inset-0 star-layer transition-opacity duration-500" style={{ y: y3 }}>
        {renderLayer(starLayers.layer3)}
      </motion.div>

      {/* 3. Soft overlay gradient so text remains ultra-clear at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-faang-bg to-transparent z-20 pointer-events-none transition-colors duration-500"></div>
    </div>
  );
}
