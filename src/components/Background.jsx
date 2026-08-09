import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Helper component to render a beautiful 3D CSS Planet
const CSSPlanet = ({ color1, color2, shadowColor, size, left, yTransform }) => (
  <motion.div
    className="absolute rounded-full z-10"
    style={{
      width: size,
      height: size,
      left: left,
      y: yTransform,
      background: `radial-gradient(circle at 30% 30%, ${color1}, ${color2})`,
      // Inner shadow gives a 3D spherical look, outer shadow gives an atmospheric glow
      boxShadow: `inset -20px -20px 40px ${shadowColor}, 0 0 40px ${color1}40`,
      filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.05))',
    }}
  />
);

export default function Background() {
  const [starLayers, setStarLayers] = useState({ layer1: [], layer2: [], layer3: [] });
  const { scrollY } = useScroll();
  
  // Stars Parallax: Stars drift slowly downwards
  const y1 = useTransform(scrollY, [0, 5000], [0, 400]);  // Back layer
  const y2 = useTransform(scrollY, [0, 5000], [0, 800]);  // Middle layer
  const y3 = useTransform(scrollY, [0, 5000], [0, 1500]); // Front layer

  // Planets Parallax: Planets rise UP from the bottom as you scroll down.
  // Window height is typically ~800px. Y=1000 means off-screen bottom, Y=-600 means off-screen top.
  const planet1Y = useTransform(scrollY, [0, 1500], [150, -800]);     // Appears immediately (Hero section)
  const planet2Y = useTransform(scrollY, [300, 2500], [1000, -800]);  // Appears around About/Skills
  const planet3Y = useTransform(scrollY, [1500, 3500], [1000, -800]); // Appears around Projects
  const planet4Y = useTransform(scrollY, [2500, 4500], [1000, -800]); // Appears around Education/Contact

  useEffect(() => {
    const generateStars = (count, sizeRange) => {
      return Array.from({ length: count }).map(() => ({
        id: Math.random().toString(36).substring(7),
        top: Math.random() * 250 - 50 + "%", 
        left: Math.random() * 100 + "%",
        size: Math.random() * sizeRange[0] + sizeRange[1] + "px",
        animationDelay: Math.random() * 60 + "s",
        animationDuration: Math.random() * 60 + 60 + "s", // 60 to 120s
      }));
    };

    setStarLayers({
      layer1: generateStars(200, [0.5, 0.5]),
      layer2: generateStars(120, [1, 1.5]),
      layer3: generateStars(80, [1.5, 2.5])
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

      {/* 2. Parallax Star Layers (Moving DOWN) */}
      <motion.div className="absolute inset-0" style={{ y: y1 }}>{renderLayer(starLayers.layer1)}</motion.div>
      <motion.div className="absolute inset-0" style={{ y: y2 }}>{renderLayer(starLayers.layer2)}</motion.div>
      <motion.div className="absolute inset-0" style={{ y: y3 }}>{renderLayer(starLayers.layer3)}</motion.div>

      {/* 3. Parallax Planets (Moving UP as you scroll down) */}
      <div className="absolute inset-0 max-w-7xl mx-auto relative">
        {/* Planet 1: Mars / Red Moon (Top Right) */}
        <CSSPlanet 
          color1="#ff9a9e" color2="#fecfef" shadowColor="#3a0000" 
          size="120px" left="80%" yTransform={planet1Y} 
        />
        
        {/* Planet 2: Neptune / Blue Giant (Middle Left) */}
        <CSSPlanet 
          color1="#4facfe" color2="#00f2fe" shadowColor="#000c40" 
          size="280px" left="5%" yTransform={planet2Y} 
        />

        {/* Planet 3: Golden / Orange Giant (Lower Right) */}
        <CSSPlanet 
          color1="#fa709a" color2="#fee140" shadowColor="#4a0000" 
          size="350px" left="75%" yTransform={planet3Y} 
        />

        {/* Planet 4: Mint / Green Planet (Bottom Left) */}
        <CSSPlanet 
          color1="#43e97b" color2="#38f9d7" shadowColor="#002a15" 
          size="180px" left="15%" yTransform={planet4Y} 
        />
      </div>

      {/* 4. Soft overlay gradient so text remains ultra-clear at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#000000] to-transparent z-20 pointer-events-none"></div>
    </div>
  );
}
