import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#0a0a0a]">
      
      {/* Premium Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.25] mix-blend-screen z-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      ></div>

      {/* Floating 3D Shape 1: Cyan/Blue Sphere */}
      <motion.div
        animate={{
          y: ["-5vh", "15vh", "-5vh"],
          x: ["-5vw", "10vw", "-5vw"],
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(0, 242, 254, 0.9), rgba(0, 112, 243, 0.4))',
          boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.6)',
          filter: 'blur(4px)'
        }}
      />

      {/* Floating 3D Shape 2: Purple/Pink Blob */}
      <motion.div
        animate={{
          y: ["15vh", "-15vh", "15vh"],
          x: ["10vw", "-15vw", "10vw"],
          rotate: [0, -90, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[5%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(240, 147, 251, 0.9), rgba(121, 40, 202, 0.4))',
          boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.6)',
          filter: 'blur(6px)'
        }}
      />

      {/* Floating 3D Shape 3: Soft Blue Rounded Rectangle */}
      <motion.div
        animate={{
          y: ["0vh", "-20vh", "0vh"],
          x: ["0vw", "15vw", "0vw"],
          rotate: [0, 45, 0],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[5%] left-[30%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-[30%] opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(79, 172, 254, 0.8), rgba(0, 112, 243, 0.2))',
          boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.6)',
          filter: 'blur(8px)'
        }}
      />

      {/* Ambient static glow to prevent complete darkness */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent z-0"></div>
    </div>
  );
}
