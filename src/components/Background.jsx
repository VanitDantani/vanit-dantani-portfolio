import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#000000]">
      
      {/* Premium Noise/Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-screen z-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      ></div>

      {/* Main Aurora Container - The blur on the parent blends the colors together like fluid */}
      <div className="absolute inset-0 blur-[100px] saturate-150 opacity-50 scale-125">
        
        {/* Blob 1: Vibrant Cyan */}
        <motion.div
          animate={{
            x: ["0%", "20%", "-10%", "0%"],
            y: ["0%", "15%", "-20%", "0%"],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-screen bg-[#00f2fe]"
        />

        {/* Blob 2: Deep Blue / Purple */}
        <motion.div
          animate={{
            x: ["0%", "-30%", "10%", "0%"],
            y: ["0%", "25%", "-10%", "0%"],
            scale: [1, 1.3, 0.8, 1],
            rotate: [360, 270, 90, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full mix-blend-screen bg-[#4facfe]"
        />

        {/* Blob 3: Magenta / Pink */}
        <motion.div
          animate={{
            x: ["0%", "15%", "-25%", "0%"],
            y: ["0%", "-20%", "15%", "0%"],
            scale: [1, 0.9, 1.2, 1],
            rotate: [0, -90, -180, -360]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[30%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen bg-[#f093fb]"
        />
        
        {/* Blob 4: Soft Violet */}
        <motion.div
          animate={{
            x: ["0%", "-10%", "20%", "0%"],
            y: ["0%", "10%", "-15%", "0%"],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 180, 360, 0]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full mix-blend-screen bg-[#667eea]"
        />
      </div>
      
      {/* Dark overlay to ensure text contrast isn't lost on top of the bright aurora */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
    </div>
  );
}
