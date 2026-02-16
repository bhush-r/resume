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

  useGSAP(() => {

    /* ================= TYPEWRITER ================= */
    const words = [
      "Software Tester",
      "Android Developer",
      "Native Apps Developer",
      "A Tech Enthusiast"
    ];

    let tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    words.forEach(word => {
      tl.to(textRef.current, { duration: 1.5, text: word })
        .to(textRef.current, { duration: 0.5, delay: 1.5, text: word })
        .to(textRef.current, { duration: 1, text: "" }, "+=0.2");
    });

    /* ================= FLOATING IMAGE ================= */
    gsap.to(".home__img", {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    /* ================= 3D TILT ================= */
    const img = document.querySelector(".home__img");
    const intro = document.querySelector(".intro");

    const move = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      gsap.to(img, {
        rotateY: -x,
        rotateX: y,
        transformPerspective: 900,
        transformOrigin: "center",
        duration: 0.5
      });

      /* ================= PARALLAX ================= */
      gsap.to(intro, {
        x: -x,
        y: -y,
        duration: 1.2,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", move);

    /* ================= MAGNETIC SOCIAL ICONS ================= */
    const links = document.querySelectorAll(".home__social-link");

    links.forEach(link => {
      link.addEventListener("mousemove", e => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;

        gsap.to(link, { x: x*0.4, y: y*0.4, scale:1.2, duration:0.3 });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, { x:0, y:0, scale:1, duration:0.3 });
      });
    });

  }, { scope: container });

  return (
    <section className="home container" id="home" ref={container}>
      <ParticlesComponent id="tsparticles" />

      <motion.div
        className="intro"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={Me} alt="Bhushan Lilhare" className="home__img" />

        <h1 className="home__name">Bhushan Lilhare</h1>

        <span className="home__education">
          I'm a <span className="txt-rotate" ref={textRef}></span>
          <span className="cursor"></span>
        </span>

        <HeaderSocials />
        <ScrollDown />
      </motion.div>
    </section>
  );
};

export default Home;
