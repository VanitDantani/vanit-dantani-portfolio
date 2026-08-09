import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#0a0000]">
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
                  opacity: 0
                }
              },
            },
          },
          particles: {
            color: {
              value: ["#ff4500", "#ff8c00", "#ff0000", "#ffb347"],
            },
            links: {
              enable: false,
            },
            move: {
              direction: "top",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: { min: 1, max: 4 },
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
              value: { min: 1, max: 5 },
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.5,
              }
            },
          },
          detectRetina: true,
        }}
      />
      {/* Fire gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-900/30 via-[#0a0000]/80 to-[#0a0000] mix-blend-screen" />
      
      {/* Soft fire glow */}
      <div className="absolute bottom-[-10%] left-[50%] -translate-x-1/2 w-[60vw] h-[40vw] rounded-[100%] bg-orange-600/10 blur-[150px] pointer-events-none mix-blend-screen" />
    </div>
  );
}
