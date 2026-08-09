export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#020202]">
      
      {/* Dark gradient overlay to fade the grid into the distance (top half of screen is black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#020202] to-transparent z-10 h-[60vh]"></div>
      
      {/* 3D Perspective Grid */}
      <div className="absolute inset-0 flex items-end justify-center perspective-[1000px]">
        {/* The grid plane, tilted in 3D space */}
        <div 
          className="relative w-[300vw] h-[100vh] origin-top" 
          style={{ transform: 'rotateX(75deg) translateY(-20%) scale(2)' }}
        >
          {/* Animated Grid Lines */}
          <div 
            className="absolute inset-0 animate-grid-flow opacity-60"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(0, 112, 243, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 112, 243, 0.4) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          ></div>
        </div>
      </div>

      {/* Cyberpunk Glowing Orbs for ambient light (bottom corners) */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-faang-accent/20 blur-[150px] mix-blend-screen pointer-events-none animate-pulse z-20" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen pointer-events-none animate-pulse z-20" style={{ animationDuration: '10s' }} />
      
      {/* Premium Vercel style Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-screen z-30 pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      ></div>
    </div>
  );
}
