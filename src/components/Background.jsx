export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#020a07]">
      
      {/* 1. Deep Forest Base Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#064e3b]/20 via-transparent to-transparent"></div>

      {/* 2. Soft Top Emerald Spotlight (Left) */}
      <div 
        className="absolute top-[-30%] left-[-10%] w-[70vw] h-[70vh] opacity-30 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
        }}
      ></div>

      {/* 3. Soft Top Mint Spotlight (Right) */}
      <div 
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vh] opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(52, 211, 153, 0.2) 0%, transparent 70%)',
        }}
      ></div>

      {/* 4. Ultra Soft Center Glow for readable text contrast */}
      <div 
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] opacity-[0.05] mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #a7f3d0 0%, transparent 60%)',
        }}
      ></div>

      {/* 5. Pure Dark Grounding at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#010503] to-transparent"></div>
    </div>
  );
}
