import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Helper component to render a photorealistic planet using real images
const ImagePlanet = ({ src, size, left, yTransform, rotation = 0, opacity = 1 }) => (
  <motion.div
    className="absolute z-10 flex items-center justify-center pointer-events-none"
    style={{
      width: size,
      height: size,
      left: left,
      y: yTransform,
      mixBlendMode: "screen", // Magically removes the black background from the space photos
      opacity: opacity,
    }}
  >
    <img 
      src={src} 
      alt="Planet" 
      className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  </motion.div>
);

export default function Background() {
  const [starLayers, setStarLayers] = useState({ layer1: [], layer2: [], layer3: [] });
  const { scrollY } = useScroll();
  
  // Stars Parallax: Stars drift slowly downwards
  const y1 = useTransform(scrollY, [0, 5000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 5000], [0, 800]);
  const y3 = useTransform(scrollY, [0, 5000], [0, 1500]);

  // Planets Parallax: Planets rise UP from the bottom as you scroll down.
  const planet1Y = useTransform(scrollY, [0, 1500], [150, -800]);     // The Moon
  const planet2Y = useTransform(scrollY, [300, 2500], [1000, -800]);  // Mars
  const planet3Y = useTransform(scrollY, [1500, 3500], [1000, -800]); // Saturn
  const planet4Y = useTransform(scrollY, [2500, 4500], [1000, -800]); // The Sun

  useEffect(() => {
    const generateStars = (count, sizeRange) => {
      return Array.from({ length: count }).map(() => ({
        id: Math.random().toString(36).substring(7),
        top: Math.random() * 250 - 50 + "%", 
        left: Math.random() * 100 + "%",
        size: Math.random() * sizeRange[0] + sizeRange[1] + "px",
        animationDelay: Math.random() * 60 + "s",
        animationDuration: Math.random() * 60 + 60 + "s",
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

      {/* 3. Photorealistic Parallax Planets */}
      <div className="absolute inset-0 max-w-7xl mx-auto relative">
        
        {/* Planet 1: The Moon (Top Right) */}
        <ImagePlanet 
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
          size="160px" left="75%" yTransform={planet1Y} 
          opacity={0.8}
        />
        
        {/* Planet 2: Mars (Middle Left) */}
        <ImagePlanet 
          src="https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
          size="240px" left="8%" yTransform={planet2Y} 
        />

        {/* Planet 3: Saturn (Lower Right) */}
        <ImagePlanet 
          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg"
          size="550px" left="55%" yTransform={planet3Y} 
          rotation={-15}
        />

        {/* Planet 4: The Sun (Bottom Left) */}
        <ImagePlanet 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg"
          size="450px" left="2%" yTransform={planet4Y} 
          opacity={0.9}
        />

      </div>

      {/* 4. Soft overlay gradient so text remains ultra-clear at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#000000] to-transparent z-20 pointer-events-none"></div>
    </div>
  );
}
