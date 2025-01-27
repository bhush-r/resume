import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // Ensure this package is installed

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false, // Disables full-screen mode to allow bounding
      },
      background: {
        color: {
          value: "transparent", // Transparent background
        },
      },
      fpsLimit: 190,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "grab",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            distance: 150,
            duration: 15,
          },
          grab: {
            distance: 100,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 5.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Limits the particle density
          },
          value: 100,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id={props.id}
      init={particlesLoaded}
      options={options}
      className="particles-container"
    />
  );
};

export default ParticlesComponent;
