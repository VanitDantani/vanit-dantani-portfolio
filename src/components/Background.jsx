import { useEffect, useState } from "react";

const Meteors = ({ number = 20 }) => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Generate random meteors with different positions and timings
    const newMeteors = new Array(number).fill(true).map(() => ({
      id: Math.random().toString(36).substring(7),
      left: Math.floor(Math.random() * (100 - -20) + -20) + "vw",
      top: Math.floor(Math.random() * (100 - -20) + -20) + "vh",
      animationDelay: Math.random() * (1.5 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (12 - 4) + 4) + "s",
    }));
    setMeteors(newMeteors);
  }, [number]);

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="animate-meteor absolute h-[1px] w-[1px] rounded-[9999px] bg-slate-400 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] opacity-0"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[70px] -translate-y-1/2 bg-gradient-to-r from-slate-400 to-transparent" />
        </span>
      ))}
    </>
  );
};

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#000000]">
      {/* 1. Ambient Deep Space Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-[#000000] to-[#000000]"></div>
      
      {/* 2. Twinkling Stars Pattern - 3 Layers for Parallax / Depth */}
      <div className="absolute inset-0 opacity-[0.4] mix-blend-screen" 
           style={{
             backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1.5px)',
             backgroundSize: '40px 40px',
           }}>
      </div>
      <div className="absolute inset-0 opacity-[0.25] mix-blend-screen" 
           style={{
             backgroundImage: 'radial-gradient(circle at center, white 1.5px, transparent 2px)',
             backgroundSize: '90px 90px',
             backgroundPosition: '15px 15px'
           }}>
      </div>
      <div className="absolute inset-0 opacity-[0.15] mix-blend-screen" 
           style={{
             backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2.5px)',
             backgroundSize: '250px 250px',
             backgroundPosition: '40px 40px'
           }}>
      </div>

      {/* 3. Shooting Stars (Meteors) */}
      <div className="absolute inset-0 h-full w-full opacity-60">
        <Meteors number={18} />
      </div>

      {/* 4. Elegant Corner Glows for premium contrast */}
      <div className="absolute -top-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/10 blur-[130px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[130px] animate-pulse" style={{ animationDuration: '12s' }} />
    </div>
  );
}
