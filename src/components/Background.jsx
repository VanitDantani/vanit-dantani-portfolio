export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#020202]">
      
      {/* 3D Perspective Grid Container */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        
        {/* The Animated Floor Grid */}
        <div 
          className="absolute inset-x-[-100vw] top-[40vh] bottom-[-100vh] animate-grid-flow"
          style={{
            transform: 'rotateX(70deg)',
            transformOrigin: 'top',
            backgroundImage: 'linear-gradient(to right, rgba(0, 112, 243, 0.6) 2px, transparent 2px), linear-gradient(to bottom, rgba(0, 112, 243, 0.6) 2px, transparent 2px)',
            backgroundSize: '100px 100px',
          }}
        ></div>

      </div>

      {/* Heavy Dark Gradient to hide the top "horizon" of the grid so it fades into darkness */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-[#020202] via-[#020202] to-transparent z-10"></div>
      
      {/* Big Cyberpunk Glowing Orbs for ambient light (bottom corners) */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#0070f3]/20 blur-[150px] mix-blend-screen pointer-events-none animate-pulse z-20" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#7928ca]/20 blur-[150px] mix-blend-screen pointer-events-none animate-pulse z-20" style={{ animationDuration: '10s' }} />
      
      {/* Vercel Style Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-screen z-30 pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      ></div>
    </div>
  );
}
