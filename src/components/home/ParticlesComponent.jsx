// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { useEffect, useMemo, useState } from "react";
// import { loadSlim } from "@tsparticles/slim"; // Ensure this package is installed

// const ParticlesComponent = (props) => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };

//   const options = useMemo(
//     () => ({
//       fullScreen: {
//         enable: false, // Disables full-screen mode to allow bounding
//       },
//       background: {
//         color: {
//           value: "transparent", // Transparent background
//         },
//       },
//       fpsLimit: 190,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: false,
//             mode: "grab",
//           },
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//         },
//         modes: {
//           push: {
//             distance: 150,
//             duration: 15,
//           },
//           grab: {
//             distance: 100,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#FFFFFF",
//         },
//         links: {
//           color: "#FFFFFF",
//           distance: 200,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: true,
//           speed: 5.3,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//             area: 140, // Limits the particle density
//           },
//           value: 140, // Number of particles
//         },
//         opacity: {
//           value: 1.0,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 2 }, // Size of particles
//         },
//       },
//       detectRetina: true,
//     }),
//     []
//   );

//   return (
//     <Particles
//       id={props.id}
//       init={particlesLoaded}
//       options={options}
//       className="particles-container"
//     />
//   );
// };

// export default ParticlesComponent;
import Particles from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 190,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: { repulse: { distance: 100 } }
    },
    particles: {
      color: { value: "#FFFFFF" },
      links: { color: "#FFFFFF", distance: 200, enable: true, opacity: 0.5 },
      move: { enable: true, speed: 5 },
      number: { density: { enable: true, area: 140 }, value: 140 },
      opacity: { value: 1 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } }
    },
    detectRetina: true
  }), []);

  return (
    <Particles id={props.id} options={options} className="particles-container" />
  );
};

export default ParticlesComponent;


// import { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const ParticlesComponent = ({ id }) => {
//   const [init, setInit] = useState(false);

//   /* Load engine once */
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => setInit(true));
//   }, []);

//   /* Options */
//   const options = useMemo(() => ({
//     fullScreen: { enable: false },

//     background: {
//       color: { value: "transparent" }
//     },

//     fpsLimit: 120,

//     interactivity: {
//       events: {
//         onHover: {
//           enable: true,
//           mode: "repulse"
//         }
//       },
//       modes: {
//         repulse: {
//           distance: 90,
//           duration: 0.4
//         }
//       }
//     },

//     particles: {
//       number: {
//         value: 120,
//         density: { enable: true, area: 800 }
//       },

//       color: { value: "#ffffff" },

//       links: {
//         enable: true,
//         color: "#ffffff",
//         distance: 160,
//         opacity: 0.4,
//         width: 1
//       },

//       move: {
//         enable: true,
//         speed: 2.2,
//         outModes: { default: "bounce" }
//       },

//       opacity: { value: 0.7 },

//       size: { value: { min: 1, max: 2 } },

//       shape: { type: "circle" }
//     },

//     detectRetina: true
//   }), []);

//   if (!init) return null;

//   return (
//     <Particles
//       id={id}
//       options={options}
//       className="particles-container"
//     />
//   );
// };

// export default ParticlesComponent;
