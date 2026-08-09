import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#000000]">
      {/* 1. Subtle Grid Pattern - Fades out towards edges */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* 2. Slow breathing Mesh Gradient Orbs (Framer Motion) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/30 blur-[150px] mix-blend-screen" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-900/20 blur-[150px] mix-blend-screen" 
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          y: [0, -50, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/20 blur-[150px] mix-blend-screen" 
      />
      
      {/* 3. Noise/Grain Texture Overlay for that premium Vercel/Apple feel */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
}
