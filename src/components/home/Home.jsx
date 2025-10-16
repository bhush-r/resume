import React, { useRef } from "react";
import "./home.css";
import Me from "../../assets/photo_imresizer.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import ParticlesComponent from "./ParticlesComponent";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const container = useRef();
  const textRef = useRef();

  // GSAP logic for the typewriter effect
  useGSAP(() => {
    // Array of words to cycle through
    const words = ["Software Tester", "Android Developer", "Native Apps Developer", "A Tech Enthusiast"];
    
    // GSAP Timeline for the rotating text effect
    let tl = gsap.timeline({ 
      repeat: -1, 
      repeatDelay: 0.5 // Pause after the word is fully displayed
    });

    words.forEach(word => {
      // Create a timeline segment for typing and deleting each word
      tl.to(textRef.current, { 
          duration: 1.5, // Typing duration
          text: word, 
          ease: "power2.inOut" 
      })
      .to(textRef.current, { 
          duration: 0.5, // Pause before deleting
          delay: 1.5, 
          text: word, 
          ease: "none" 
      })
      .to(textRef.current, { 
          duration: 1, // Deleting duration
          text: "", 
          ease: "power2.inOut" 
      }, "+=0.2"); // Start deleting slightly after the pause
    });
  }, { scope: container, revertOnUpdate: true }); // revertOnUpdate is good practice for hot reloading

  return (
    <section className="home container" id="home" ref={container}>
      {/* Particles effect background */}
      <ParticlesComponent id="tsparticles" /> 
      
      {/* Framer Motion animation for the main content intro */}
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={Me} alt="Bhushan Lilhare" className="home__img" />
        <h1 className="home__name">Bhushan Lilhare</h1>
        <span className="home__education">
          I'm a <span className="txt-rotate" ref={textRef}></span>
          {/* Cursor is implemented purely with CSS in home.css using the .cursor class */}
          <span className="cursor"></span> 
        </span>

        <HeaderSocials />
        <ScrollDown />
      </motion.div>
    </section>
  );
};

export default Home;
