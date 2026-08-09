import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#050505]">
      
      {/* Subtle ambient warm glow at the bottom to simulate a fire source */}
      <div className="absolute inset-x-0 bottom-[-20%] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent z-0 blur-[50px]"></div>

      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-10"
          options={{
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: ["#ff5722", "#ff9800", "#ffc107", "#ffeb3b"], // Fire / Ember colors
              },
              move: {
                direction: "top", // Embers float upwards
                enable: true,
                outModes: {
                  default: "out", // They disappear when they hit the top
                },
                random: true,
                speed: { min: 0.5, max: 2 },
                straight: false, // Slight random waving like real fire
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100, // Lots of small sparkles
              },
              opacity: {
                value: { min: 0.1, max: 0.8 },
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
                animation: {
                  enable: true,
                  speed: 2,
                  sync: false,
                },
              },
              // A slight glowing shadow on particles makes them look like embers
              shadow: {
                blur: 5,
                color: {
                  value: "#ff9800",
                },
                enable: true,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}
