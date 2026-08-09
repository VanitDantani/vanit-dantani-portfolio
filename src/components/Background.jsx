import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#050B14]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.6,
                  color: "#0066cc"
                }
              },
            },
          },
          particles: {
            color: {
              value: ["#0070f3", "#333333", "#ffffff"],
            },
            links: {
              color: "#1e3a8a",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.6,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
              }
            },
          },
          detectRetina: true,
        }}
      />
      {/* Moonlight gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050B14]/80 to-[#050B14] mix-blend-screen" />
      
      {/* Soft moon glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none mix-blend-screen" />
    </div>
  );
}
