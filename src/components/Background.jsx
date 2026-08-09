export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#000000]">
      
      {/* 1. Subtle Premium Dot Grid (Fades out at the bottom) */}
      <div 
        className="absolute inset-0 opacity-[0.25]" 
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
        }}
      ></div>

      {/* 2. Top Spotlight Gradient (Blue/Cyan) */}
      <div 
        className="absolute top-[-30%] left-[-10%] w-[60vw] h-[60vh] opacity-30 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 112, 243, 0.5) 0%, transparent 70%)',
        }}
      ></div>

      {/* 3. Top Spotlight Gradient (Purple/Magenta) */}
      <div 
        className="absolute top-[-30%] right-[-10%] w-[60vw] h-[60vh] opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(121, 40, 202, 0.5) 0%, transparent 70%)',
        }}
      ></div>

      {/* 4. Ultra Soft Center Glow to highlight the Hero Section */}
      <div 
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] opacity-10 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #ffffff 0%, transparent 60%)',
        }}
      ></div>

      {/* 5. Pure Black gradient at the bottom so the footer is completely clean */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#000000] to-transparent"></div>
    </div>
  );
}
