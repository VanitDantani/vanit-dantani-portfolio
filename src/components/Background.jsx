import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#000000]">
      
      {/* Pure Black Background */}
      <div className="absolute inset-0 bg-[#000000]"></div>

      {/* Classic Space Stars using tsParticles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-10"
        options={{
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff", // Pure white stars
            },
            move: {
              direction: "none", // Drift in all directions
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.2, // Very slow realistic drifting
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 150, // Dense starfield
            },
            opacity: {
              value: { min: 0.1, max: 1 },
              animation: {
                enable: true,
                speed: 1.5, // Twinkling effect
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 2 }, // Tiny, realistic star sizes
              animation: {
                enable: true,
                speed: 2,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
      
      {/* Soft overlay gradient so text remains ultra-clear at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[20vh] bg-gradient-to-t from-[#000000] to-transparent z-20 pointer-events-none"></div>
    </div>
  );
}
